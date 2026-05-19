export const config = {
  "number": 9,
  "slug": "accessibility-quickscan",
  "title": "Accessibility QuickScan",
  "category": "Digital Presence",
  "tagline": "A plain-English accessibility triage checklist for small-business websites.",
  "persona": "Students and mentors performing pre-handoff QA.",
  "gap": "Accessibility tools produce technical violations. Owners need human-readable fixes and students need prioritized triage.",
  "niche": "Fast accessibility uplift for pro bono websites.",
  "metric": "critical accessibility blockers resolved before handoff",
  "modules": [
    "Keyboard path checklist",
    "Alt text review board",
    "Color contrast notes",
    "Owner-friendly issue report"
  ],
  "theme": {
    "accent": "#2563eb",
    "accent2": "#60a5fa",
    "emoji": "\ud83c\udf10",
    "metricLabel": "Presence readiness",
    "workflow": [
      "Capture public evidence",
      "Score the digital gap",
      "Prioritize owner-safe fixes",
      "Export handoff packet"
    ],
    "privacy": "Only public business information and project notes should be entered. Do not store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "keyboard-path-checklist",
      "label": "Keyboard path checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify keyboard path checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "alt-text-review-board",
      "label": "Alt text review board",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify alt text review board with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "color-contrast-notes",
      "label": "Color contrast notes",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify color contrast notes with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "owner-friendly-issue-report",
      "label": "Owner-friendly issue report",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify owner-friendly issue report with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Accessibility QuickScan and capture baseline evidence.",
      "Complete the keyboard path checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Riverside Community Bakery",
    "chapter": "Jacksonville",
    "studentLead": "Volta Student Lead",
    "notes": "Digital presence sprint for an under-digitized local storefront. Accessibility QuickScan sample.",
    "evidencePrefix": "Accessibility QuickScan",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
