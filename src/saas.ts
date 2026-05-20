export const saas = {
  "productName": "Accessibility QuickScan",
  "category": "Digital Presence",
  "northStar": "certified accessibility blockers resolved per client handoff",
  "segments": [
    "Student accessibility pods",
    "Small-business owners",
    "Volunteer web agencies",
    "Municipal digital-equity programs"
  ],
  "jobs": [
    "Turn automated violations into plain-English remediation plans",
    "Prioritize critical fixes by impact, effort, and owner risk",
    "Track retest evidence through mentor approval",
    "Package owner-safe before/after proof"
  ],
  "plans": [
    {
      "name": "Community",
      "price": "Free",
      "promise": "Single-site audits, local storage, markdown/CSV exports"
    },
    {
      "name": "Studio",
      "price": "49/mo",
      "promise": "Multi-client portfolio, retest calendar, issue severity analytics"
    },
    {
      "name": "Chapter",
      "price": "199/mo",
      "promise": "Mentor queues, chapter dashboard, reusable fix libraries"
    },
    {
      "name": "Partner",
      "price": "Custom",
      "promise": "White-labeled accessibility program reporting and sponsor exports"
    }
  ],
  "metrics": [
    {
      "label": "Critical blockers closed",
      "current": 18,
      "target": 20,
      "note": "WCAG AA blockers fixed before handoff"
    },
    {
      "label": "Retest coverage",
      "current": 92,
      "target": 95,
      "note": "Issues retested with evidence"
    },
    {
      "label": "Owner approval rate",
      "current": 87,
      "target": 90,
      "note": "Reports approved without rewrite"
    },
    {
      "label": "Average days to remediation",
      "current": 6,
      "target": 5,
      "note": "Time from issue capture to accepted fix"
    }
  ],
  "playbooks": [
    "Zero-login public site scan",
    "Keyboard and focus walkthrough",
    "Alt-text remediation sprint",
    "Contrast fix QA",
    "Owner handoff and retest"
  ],
  "integrations": [
    "axe/Lighthouse findings import",
    "GitHub Issues backlog sync",
    "Google Sheets client tracker",
    "Slack mentor review alerts",
    "PDF/print handoff packets"
  ],
  "controls": [
    "No credentials or private customer data entered",
    "Each critical issue requires page, severity, fix text, and retest evidence",
    "Exports separate owner-safe language from internal notes",
    "Mentor signoff required before certified status"
  ],
  "roadmap": [
    "Issue taxonomy with WCAG mapping",
    "Screenshot evidence attachments with redaction labels",
    "Retest scheduler and regression history",
    "Agency/chapter portfolio analytics",
    "Automated accessibility scanner adapters"
  ],
  "personas": [
    {
      "name": "Pod accessibility lead",
      "role": "Runs scans and triage",
      "pain": "Technical WCAG language slows owner approvals",
      "success": "Every blocker has plain-English fix copy and retest proof",
      "activation": "Import scan findings or load sample triage"
    },
    {
      "name": "Business owner",
      "role": "Approves fixes and handoff language",
      "pain": "Accessibility reports feel too technical to act on",
      "success": "Receives prioritized before/after packet with owner-safe wording",
      "activation": "Review exported owner handoff brief"
    },
    {
      "name": "Mentor reviewer",
      "role": "Verifies evidence and certification readiness",
      "pain": "Needs a consistent proof trail across many student audits",
      "success": "Critical issues have severity, owner, evidence, and signoff",
      "activation": "Open governance queue and verify controls"
    }
  ],
  "journeys": [
    {
      "stage": "Intake",
      "moment": "Capture public URL, audience risk, and accessibility goal",
      "success": "Site scope and owner approval captured",
      "automation": "URL checklist plus no-login privacy guard"
    },
    {
      "stage": "Triage",
      "moment": "Map keyboard, alt text, contrast, and forms issues",
      "success": "Issues grouped by WCAG area and business impact",
      "automation": "axe/Lighthouse import adapter backlog"
    },
    {
      "stage": "Remediation",
      "moment": "Assign fix text, severity, owner, and due date",
      "success": "Critical blockers have accepted fix language",
      "automation": "GitHub issue sync and mentor reminders"
    },
    {
      "stage": "Retest",
      "moment": "Record before/after evidence and regression status",
      "success": "Retest coverage reaches 95%+",
      "automation": "Retest calendar and evidence checklist"
    },
    {
      "stage": "Handoff",
      "moment": "Export client-safe report and sponsor summary",
      "success": "Owner approves packet without rewrite",
      "automation": "Markdown/CSV/PDF export bundle"
    }
  ],
  "features": [
    {
      "name": "WCAG issue taxonomy",
      "tier": "Community",
      "description": "Plain-English grouping for keyboard, text alternatives, contrast, forms, and headings",
      "evidence": "Issue rows require page, severity, impact, and fix text"
    },
    {
      "name": "Retest evidence ledger",
      "tier": "Studio",
      "description": "Before/after proof tracking with reviewer status and regression notes",
      "evidence": "Retest rows include timestamped evidence and owner acceptance"
    },
    {
      "name": "Mentor QA queue",
      "tier": "Chapter",
      "description": "Multi-client review queue for high-risk issues and stale retests",
      "evidence": "Controls require mentor signoff before certification"
    },
    {
      "name": "Scanner adapter hub",
      "tier": "Partner",
      "description": "Normalized import path for axe, Lighthouse, and manual audits",
      "evidence": "Imported findings preserve source and mapping confidence"
    },
    {
      "name": "Owner-safe report builder",
      "tier": "Studio",
      "description": "Translates technical violations into business-facing remediation language",
      "evidence": "Export separates internal notes from client-safe recommendations"
    },
    {
      "name": "Portfolio accessibility analytics",
      "tier": "Partner",
      "description": "Chapter-level closure rates, severity trends, and sponsor outcome reporting",
      "evidence": "Aggregates only anonymized blocker counts and remediation velocity"
    }
  ],
  "experiments": [
    {
      "hypothesis": "Plain-English fix copy increases owner approval speed",
      "measure": "Owner approval rate",
      "target": "90% approval without rewrite",
      "cadence": "monthly"
    },
    {
      "hypothesis": "Retest reminders reduce stale accessibility blockers",
      "measure": "Average days to remediation",
      "target": "5 days or less",
      "cadence": "weekly"
    },
    {
      "hypothesis": "Scanner imports shorten initial triage",
      "measure": "Critical blockers closed",
      "target": "20 blockers per cycle",
      "cadence": "per cohort"
    },
    {
      "hypothesis": "Mentor queues improve evidence quality",
      "measure": "Retest coverage",
      "target": "95% retested",
      "cadence": "weekly"
    }
  ],
  "risks": [
    {
      "risk": "Teams may paste private customer data into issue notes",
      "mitigation": "No-credentials control plus client-safe export separation",
      "owner": "Program lead",
      "severity": "high"
    },
    {
      "risk": "Automated scan findings may be treated as complete audits",
      "mitigation": "Manual keyboard and owner-context walkthrough remains required",
      "owner": "Mentor reviewer",
      "severity": "medium"
    },
    {
      "risk": "Fix recommendations could exceed owner budget",
      "mitigation": "Impact/effort prioritization and staged roadmap export",
      "owner": "Accessibility lead",
      "severity": "medium"
    },
    {
      "risk": "Screenshots can expose personal information",
      "mitigation": "Redaction labels and safe evidence checklist",
      "owner": "Mentor reviewer",
      "severity": "high"
    }
  ],
  "automations": [
    {
      "name": "Scan import normalizer",
      "trigger": "New axe/Lighthouse export uploaded",
      "action": "Create mapped issue backlog with source labels",
      "owner": "Program lead"
    },
    {
      "name": "Retest reminder",
      "trigger": "Critical issue remains open after due date",
      "action": "Notify mentor queue and mark roadmap risk",
      "owner": "Mentor reviewer"
    },
    {
      "name": "Owner packet builder",
      "trigger": "All critical controls verified",
      "action": "Generate Markdown, CSV, and printable handoff",
      "owner": "Student pod"
    },
    {
      "name": "Sponsor summary rollup",
      "trigger": "Cohort closes",
      "action": "Aggregate anonymized blockers resolved and approval rate",
      "owner": "Chapter director"
    }
  ],
  "dashboards": [
    {
      "name": "Triage cockpit",
      "audience": "Student pods",
      "widgets": [
        "Open critical blockers",
        "Retest coverage",
        "Owner approvals",
        "Days to remediation"
      ]
    },
    {
      "name": "Mentor governance queue",
      "audience": "Mentors",
      "widgets": [
        "Controls missing evidence",
        "High severity issues",
        "Stale retests",
        "Export readiness"
      ]
    },
    {
      "name": "Sponsor impact board",
      "audience": "Program partners",
      "widgets": [
        "Blockers closed",
        "Clients served",
        "Before/after proof",
        "Accessibility trendline"
      ]
    }
  ],
  "templates": [
    {
      "name": "Owner remediation brief",
      "format": "Markdown",
      "sections": [
        "Top blockers",
        "Plain-English fixes",
        "Retest proof",
        "Next priorities"
      ]
    },
    {
      "name": "Issue backlog CSV",
      "format": "CSV",
      "sections": [
        "Page",
        "WCAG area",
        "Severity",
        "Owner",
        "Retest status"
      ]
    },
    {
      "name": "Mentor QA checklist",
      "format": "Markdown",
      "sections": [
        "Evidence completeness",
        "Risk review",
        "Client-safe language",
        "Certification signoff"
      ]
    }
  ]
};
