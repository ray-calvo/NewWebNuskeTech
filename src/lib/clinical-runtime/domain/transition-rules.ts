import type {
  ClinicalPageRoute,
  ClinicalTransitionRule,
  ClinicalUxState,
} from "@/lib/clinical-runtime/domain/clinical-types";

export const CLINICAL_TRANSITION_RULES: readonly ClinicalTransitionRule[] = [
  {
    from: "/urgencias",
    to: "/diagnostico",
    allowedStates: ["urgency-perceived"],
    reason: "After initial stabilization, the next step may be diagnostic clarification.",
  },
  {
    from: "/urgencias",
    to: "/cirugia",
    allowedStates: ["urgency-perceived"],
    reason: "After stabilization, the case may require a surgical resolution path.",
  },
  {
    from: "/diagnostico",
    to: "/medicina-interna",
    allowedStates: ["clinical-uncertainty", "recognized-complexity"],
    reason: "Escalate to integrative medical evaluation when the case remains unclear or broad.",
  },
  {
    from: "/diagnostico",
    to: "/oncologia",
    allowedStates: ["recognized-complexity"],
    reason: "Escalate when findings or progression suggest oncologic complexity.",
  },
  {
    from: "/medicina-interna",
    to: "/oncologia",
    allowedStates: ["recognized-complexity"],
    reason: "Escalate when integrative evaluation supports an oncologic route.",
  },
  {
    from: "/prevencion",
    to: "/diagnostico",
    allowedStates: ["stability-followup", "clinical-uncertainty"],
    reason: "Escalate when follow-up identifies signs or findings that require clarification.",
  },
  {
    from: "/exoticos",
    to: "/urgencias",
    allowedStates: ["urgency-perceived", "recognized-complexity"],
    reason: "Escalate when a non-conventional patient is unstable or deteriorating.",
  },
];

export function getClinicalTransitionsFromRoute(
  route: ClinicalPageRoute,
): readonly ClinicalTransitionRule[] {
  return CLINICAL_TRANSITION_RULES.filter((transition) => transition.from === route);
}

export function getClinicalTransitionsForState(
  route: ClinicalPageRoute,
  state: ClinicalUxState,
): readonly ClinicalTransitionRule[] {
  return CLINICAL_TRANSITION_RULES.filter(
    (transition) =>
      transition.from === route && transition.allowedStates.includes(state),
  );
}

export function isClinicalTransitionAllowed(
  from: ClinicalPageRoute,
  to: ClinicalPageRoute,
  state: ClinicalUxState,
): boolean {
  return CLINICAL_TRANSITION_RULES.some(
    (transition) =>
      transition.from === from &&
      transition.to === to &&
      transition.allowedStates.includes(state),
  );
}
