import test from "node:test";
import assert from "node:assert/strict";

import {
  resolveGlobalClinicalBarModel,
} from "./global-clinical-bar-mapping.ts";

function createInput(overrides: Record<string, unknown> = {}) {
  const base = {
    pathname: "/servicios",
    clinicalSession: null,
    orchestration: {
      orchestrationSource: "page-context",
      uiOutput: {
        triageSeverity: null,
      },
      uiModel: {
        resolvedState: "clinical-uncertainty",
        visualPriority: "medium",
        visibleSignals: [],
      },
    },
  };

  return {
    ...base,
    ...overrides,
    orchestration: {
      ...base.orchestration,
      ...(overrides.orchestration as Record<string, unknown> | undefined),
      uiOutput: {
        ...base.orchestration.uiOutput,
        ...((overrides.orchestration as { uiOutput?: Record<string, unknown> } | undefined)
          ?.uiOutput ?? {}),
      },
      uiModel: {
        ...base.orchestration.uiModel,
        ...((overrides.orchestration as { uiModel?: Record<string, unknown> } | undefined)
          ?.uiModel ?? {}),
      },
    },
  };
}

test("resolves urgent state when triage severity is critical", () => {
  const result = resolveGlobalClinicalBarModel(
    createInput({
      pathname: "/oncologia",
      clinicalSession: {
        triageSeverity: "critical-emergency",
        activeUrgencySignals: [],
      },
    }) as never,
  );

  assert.equal(result.state, "urgent");
  assert.equal(result.message, "Tu mascota puede necesitar atencion inmediata");
  assert.equal(result.primaryAction?.label, "Ir a urgencias ahora");
});

test("resolves uncertainty state for diagnostic routes without urgency", () => {
  const result = resolveGlobalClinicalBarModel(
    createInput({
      pathname: "/diagnostico",
      orchestration: {
        uiModel: {
          resolvedState: "clinical-uncertainty",
          visualPriority: "medium",
        },
      },
    }) as never,
  );

  assert.equal(result.state, "uncertainty");
  assert.equal(result.primaryAction?.label, "Iniciar chequeo clinico");
  assert.equal(result.secondaryAction?.label, "Solicitar valoracion medica");
});

test("resolves consultative state for specialized routes without urgent session", () => {
  const result = resolveGlobalClinicalBarModel(
    createInput({
      pathname: "/oncologia",
      orchestration: {
        uiModel: {
          resolvedState: "recognized-complexity",
          visualPriority: "medium",
        },
      },
    }) as never,
  );

  assert.equal(result.state, "consultative");
  assert.equal(result.primaryAction?.label, "Solicitar valoracion medica");
  assert.equal(result.secondaryAction?.label, "Ver diagnostico");
});

test("resolves neutral state as safe fallback when no session is active", () => {
  const result = resolveGlobalClinicalBarModel(
    createInput({
      pathname: "/servicios",
      orchestration: {
        uiModel: {
          resolvedState: "clinical-uncertainty",
          visualPriority: "calm",
        },
      },
    }) as never,
  );

  assert.equal(result.state, "neutral");
  assert.equal(result.primaryAction?.label, "Solicitar valoracion medica");
  assert.equal(result.secondaryAction?.label, "Ir a urgencias");
});

test("hides the bar on urgencias and triage", () => {
  const urgencias = resolveGlobalClinicalBarModel(
    createInput({ pathname: "/urgencias" }) as never,
  );
  const triage = resolveGlobalClinicalBarModel(
    createInput({ pathname: "/triage" }) as never,
  );

  assert.equal(urgencias.state, "hidden");
  assert.equal(urgencias.shouldRender, false);
  assert.equal(triage.state, "hidden");
  assert.equal(triage.shouldRender, false);
});

test("respects state precedence by keeping urgent above consultative", () => {
  const result = resolveGlobalClinicalBarModel(
    createInput({
      pathname: "/cirugia",
      clinicalSession: {
        triageSeverity: "critical-emergency",
        activeUrgencySignals: [
          {
            active: true,
            severity: "high",
            source: "triage",
            reason: "Critical urgency remains active.",
          },
        ],
      },
      orchestration: {
        orchestrationSource: "clinical-session",
        uiModel: {
          resolvedState: "recognized-complexity",
          visualPriority: "maximum",
          visibleSignals: [
            {
              kind: "urgent-risk",
              severity: "high",
              source: "triage",
              reason: "Critical urgency remains active.",
            },
          ],
        },
        uiOutput: {
          triageSeverity: "critical-emergency",
        },
      },
    }) as never,
  );

  assert.equal(result.state, "urgent");
  assert.equal(result.primaryAction?.href, "/urgencias");
});

