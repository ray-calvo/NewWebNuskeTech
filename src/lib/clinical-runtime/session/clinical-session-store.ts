import "client-only";

import type { ClinicalPageRoute } from "@/lib/clinical-runtime/domain";
import type { TriageBridgeOutput } from "@/lib/clinical-runtime/triage-bridge";

import {
  DEFAULT_CLINICAL_SESSION_TTL_MS,
  type ClinicalSessionListener,
  type ClinicalSessionReadResult,
  type ClinicalSessionSnapshot,
} from "@/lib/clinical-runtime/session/clinical-session-types";

let currentClinicalSession: ClinicalSessionSnapshot | null = null;
const listeners = new Set<ClinicalSessionListener>();

function notifyListeners() {
  listeners.forEach((listener) => {
    listener(currentClinicalSession);
  });
}

function isExpired(snapshot: ClinicalSessionSnapshot, now: number): boolean {
  return snapshot.expiresAt <= now;
}

export function subscribeClinicalSession(
  listener: ClinicalSessionListener,
): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function setClinicalSessionSnapshot(
  snapshot: ClinicalSessionSnapshot,
): ClinicalSessionSnapshot {
  currentClinicalSession = snapshot;
  notifyListeners();
  return snapshot;
}

export function clearClinicalSessionSnapshot() {
  if (!currentClinicalSession) {
    return;
  }

  currentClinicalSession = null;
  notifyListeners();
}

export function readClinicalSessionSnapshot(
  now = Date.now(),
): ClinicalSessionReadResult {
  if (!currentClinicalSession) {
    return {
      status: "empty",
      snapshot: null,
    };
  }

  if (isExpired(currentClinicalSession, now)) {
    currentClinicalSession = null;
    notifyListeners();
    return {
      status: "expired",
      snapshot: null,
    };
  }

  return {
    status: "active",
    snapshot: currentClinicalSession,
  };
}

export function createClinicalSessionSnapshotFromTriageBridge({
  triageBridge,
  originRoute = "/triage",
  ttlMs = DEFAULT_CLINICAL_SESSION_TTL_MS,
}: {
  triageBridge: TriageBridgeOutput;
  originRoute?: ClinicalPageRoute;
  ttlMs?: number;
}): ClinicalSessionSnapshot {
  const createdAt = Date.now();

  return {
    source: "triage",
    originRoute,
    currentState: triageBridge.resolvedClinicalState,
    resolvedIntensity: triageBridge.resolvedIntensity,
    recommendedRoute: triageBridge.recommendedRoute,
    fallbackRoute: triageBridge.fallbackRoute,
    activeUrgencySignals: triageBridge.activeUrgencySignals,
    preserveSafeFallback: triageBridge.preserveSafeFallback,
    triageSeverity: triageBridge.normalizedSeverity,
    reason: triageBridge.bridgeReason,
    createdAt,
    expiresAt: createdAt + ttlMs,
  };
}
