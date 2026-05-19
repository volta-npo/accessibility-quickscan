export const domain = {
    "kind": "accessibility-scan",
    "title": "Accessibility QuickScan",
    "purpose": "A purpose-built accessibility scan interface for a plain-english accessibility triage checklist for small-business websites.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Accessibility issues",
    "metricLabels": [
        "Accessibility Health",
        "Blocker Risk",
        "Retest Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "critical accessibility blockers resolved before handoff",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Pages inventoried",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Issue report",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Pages inventoried",
        "Keyboard path tested",
        "Alt text issues logged",
        "Contrast ratios checked",
        "Forms/labels reviewed",
        "CTA clarity checked",
        "Owner-friendly fix text written",
        "Retest evidence attached"
    ],
    "artifacts": [
        "Issue report",
        "Accessibility backlog CSV",
        "Before/after fix log"
    ],
    "checks": [
        "Critical blockers cannot be complete without retest",
        "Contrast ratio numeric",
        "Every issue needs page and fix text"
    ],
    "sampleClient": "Riverside Community Bakery"
};
//# sourceMappingURL=domain.js.map