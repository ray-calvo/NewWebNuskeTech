"use client";

import type {
  Species,
  TriageCategory,
  TriageLevel,
} from "@/features/marketing/components/triage/types";

export type TriageTrackingEventName =
  | "triage_entrypoint_detected"
  | "triage_started"
  | "triage_step_viewed"
  | "triage_step_abandoned"
  | "triage_species_selected"
  | "triage_category_selected"
  | "triage_result_shown"
  | "triage_primary_cta_clicked"
  | "triage_secondary_cta_clicked"
  | "triage_reset";

export type TriageTrackingPayload = {
  entrypoint_source?: string | null;
  step_name?: string | null;
  step_index?: number | null;
  species?: Species | null;
  category?: TriageCategory | null;
  result_level?: TriageLevel | null;
  total_score?: number | null;
  selected_symptom_count?: number;
  selected_modifier_count?: number;
};

type TriageTrackingDetail = TriageTrackingPayload & {
  event: TriageTrackingEventName;
  module: "triage";
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackTriageEvent(
  event: TriageTrackingEventName,
  payload: TriageTrackingPayload,
) {
  if (typeof window === "undefined") {
    return;
  }

  const detail: TriageTrackingDetail = {
    event,
    module: "triage",
    ...payload,
  };

  window.dispatchEvent(new CustomEvent("triage:track", { detail }));

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(detail);
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[triage-track]", detail);
  }
}
