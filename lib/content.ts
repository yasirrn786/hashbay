export const company = {
  name: "Hashbay Technology Private Limited",
  email: "contact@hashbaytechnology.com",
  phone: "+917899347270",
  phoneDisplay: "+91 78993 47270",
  location: "Bangalore, India",
};

export const services = [
  {
    slug: "software",
    legacyId: "software",
    name: "Software & websites",
    line: "A focused build, a useful workflow, a clean handover.",
    headline: "Build something your team can use.",
    intro:
      "Websites, internal tools and business applications. Begin with one clear outcome, then build and test the smallest useful version.",
    start: "A bounded discovery or one-workflow pilot",
    deliverables: [
      "A written requirement and acceptance checklist",
      "The agreed interface, workflow or application",
      "Test results and deployment instructions",
      "Source files, account access and a handover session, as agreed",
    ],
    scope: [
      "Websites and web applications",
      "Internal tools and workflow software",
      "Mobile and enterprise applications, after technical review",
      "Deployment, integration and separately scoped maintenance",
    ],
    boundaries: [
      "Integrations and data migration need their own scope.",
      "Hosting, paid software and third-party licences are itemised.",
      "New features follow an approved change request.",
      "Ownership of existing and licensed components is listed separately.",
    ],
    prepare:
      "Bring the current process, the users involved and one example of a successful result. Avoid sending passwords or live customer records.",
    acceptance:
      "Walk through the agreed user journeys, check the named acceptance tests and have someone follow the deployment guide.",
    demo: "/lab",
    demoLabel: "Try the workflow tracker",
  },
  {
    slug: "infrastructure",
    legacyId: "infrastructure",
    name: "IT infrastructure",
    line: "Reliable networks, devices and office systems.",
    headline: "Give everyday work a solid foundation.",
    intro:
      "Office networks, systems and infrastructure work with a clear inventory, change plan and operating handover.",
    start: "An inventory and network review",
    deliverables: [
      "An agreed asset and network inventory",
      "A design or approved upgrade plan",
      "Installation and connectivity checks within scope",
      "Configuration records and an operating guide",
    ],
    scope: [
      "Network study, design and implementation",
      "Office systems and peripheral upgrades",
      "Network administration and maintenance",
      "Data centre and CCTV requirements, subject to specialist and site review",
    ],
    boundaries: [
      "On-site coverage is confirmed for your address before booking.",
      "Hardware, cabling, spares and travel are quoted separately.",
      "Site readiness and downtime are agreed before a change.",
      "Third-party warranties stay with the relevant vendor.",
    ],
    prepare:
      "Share the site location, device count, connectivity problem and any change window. A remote review and an on-site visit are separate scopes.",
    acceptance:
      "Test the agreed connectivity and access requirements, record the configuration and confirm who operates the system.",
    demo: "/approach#handover",
    demoLabel: "Inspect the handover standard",
  },
  {
    slug: "cloud",
    legacyId: "cloud",
    name: "Cloud & cost control",
    line: "Understand the bill. Test the change. Measure the result.",
    headline: "A cloud plan that adds up.",
    intro:
      "Review one workload, understand its full cost and test an improvement against performance and recovery requirements.",
    start: "A bill and workload baseline",
    deliverables: [
      "A baseline of cost, usage and agreed performance measures",
      "A proposed change with dependencies and one-time costs",
      "A limited trial and rollback plan",
      "A before-and-after review and operating notes",
    ],
    scope: [
      "Cloud migration planning",
      "Workload and cost optimisation",
      "Cloud management with a defined service window",
      "AWS, Microsoft Azure or Google Cloud work, subject to expertise review",
    ],
    boundaries: [
      "Savings are measured, not guaranteed.",
      "Compute, storage, network, licensing and support costs all matter.",
      "Any production change needs customer approval and a recovery plan.",
      "Platform subscriptions and partner status are separate from our service.",
    ],
    prepare:
      "Bring a redacted bill, the workload purpose, current performance targets and recovery requirements. Account access is arranged securely after scope approval.",
    acceptance:
      "Compare full recurring cost and change cost, then verify the agreed performance and recovery checks before accepting a change.",
    demo: "/lab?demo=cloud",
    demoLabel: "Use the cloud cost worksheet",
  },
  {
    slug: "security",
    legacyId: "security",
    name: "Security foundations",
    line: "A defined assessment and an approved action plan.",
    headline: "Know the risk. Choose the next step.",
    intro:
      "A scoped security review can turn an unclear concern into a prioritised action plan. The method and qualified delivery lead are confirmed before work starts.",
    start: "A limited, authorised security baseline",
    deliverables: [
      "Written authorisation, systems in scope and test boundaries",
      "Findings with evidence and prioritised actions",
      "Separately approved fixes with backup and change controls",
      "Retest results for the agreed findings",
    ],
    scope: [
      "Configuration and access reviews",
      "Vulnerability assessment",
      "Security implementation and remediation",
      "Penetration testing and monitoring only after specialist, scope and coverage review",
    ],
    boundaries: [
      "Testing requires written permission from the system owner.",
      "A limited review is not a compliance certification or a guarantee of security.",
      "High-risk or regulated work may require an independent specialist.",
      "Monitoring coverage and incident response are separate written agreements.",
    ],
    prepare:
      "Describe the concern, the system owner, business impact and systems involved. Do not put secrets or sensitive evidence in the project brief.",
    acceptance:
      "Review the evidence, confirm each approved fix and record the retest outcome and residual risks.",
    demo: "/approach#changes",
    demoLabel: "Read the change controls",
  },
  {
    slug: "support",
    legacyId: "support",
    name: "IT support",
    line: "Clear coverage, service hours and escalation.",
    headline: "Support with understandable boundaries.",
    intro:
      "A one-off support task or an ongoing maintenance scope. Define the assets, hours and escalation path before agreeing a service.",
    start: "A single support task or an asset review",
    deliverables: [
      "An agreed list of supported assets and request types",
      "Service hours, contact method and response targets",
      "Task records and escalation responsibilities",
      "A maintenance or exit handover, where included",
    ],
    scope: [
      "Hardware and operating-system support",
      "Multi-vendor annual maintenance requirements",
      "Service desk and software maintenance",
      "Facility management, subject to staffing and site review",
    ],
    boundaries: [
      "Response time and resolution time are different commitments.",
      "No round-the-clock coverage is implied by this website.",
      "Parts, licences, travel and out-of-scope repairs need explicit pricing.",
      "On-site attendance depends on confirmed engineer availability and location.",
    ],
    prepare:
      "List the users, devices, software, known faults and required service hours. Unknown or ageing systems may need a paid inspection before a fixed quote.",
    acceptance:
      "Confirm the named task is resolved or the agreed maintenance checks are complete, with unresolved dependencies recorded.",
    demo: "/approach#quote",
    demoLabel: "See what belongs in a support quote",
  },
  {
    slug: "people",
    legacyId: "professional-services",
    name: "People & consulting",
    line: "Role-based expertise, with availability confirmed.",
    headline: "Start with the role. Then find the fit.",
    intro:
      "Technology consulting, project expertise and staffing enquiries built around a specific requirement rather than a generic skills list.",
    start: "One role or a defined consulting question",
    deliverables: [
      "A role scorecard or consulting scope",
      "Agreed evidence of relevant skills and experience",
      "A consented work sample or scoped recommendation",
      "Responsibilities, engagement terms and a continuity plan",
    ],
    scope: [
      "Technology consulting and project advice",
      "IT manpower consultancy",
      "Staffing and recruitment requirements",
      "On-site or remote expertise, after availability review",
    ],
    boundaries: [
      "Candidate and specialist availability is confirmed per engagement.",
      "Any assessment needs consent and a job-relevant task.",
      "Replacement terms and their limits are agreed before a placement.",
      "Payroll staffing requires confirmed funding and administration; it is not booked through this website.",
    ],
    prepare:
      "Bring the role outcome, required experience, location, duration and budget. Do not send candidate personal information without permission.",
    acceptance:
      "Use the agreed role criteria or consulting deliverable to review the result, then document the handover and responsibilities.",
    demo: "/downloads/role-scorecard.txt",
    demoLabel: "Download a role scorecard",
  },
] as const;

export const programs = [
  {
    slug: "web-development",
    name: "Web development",
    line: "Build, debug and deploy a useful interface.",
    prerequisite: "Basic computer use and comfort working with files.",
    topics: [
      "HTML, CSS and JavaScript foundations",
      "React and application structure",
      "Testing and deployment",
    ],
    exercise: "Build a small usable form, validate its inputs and publish it.",
    tools:
      "A computer, a browser and a code editor; any paid service is disclosed in the course sheet.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    line: "Practice within a safe, authorised lab.",
    prerequisite: "Basic networking and operating-system familiarity.",
    topics: [
      "Threats and security fundamentals",
      "Traffic analysis and tools such as Wireshark",
      "Evidence, remediation and safe testing",
    ],
    exercise:
      "Inspect a prepared lab scenario and explain a supported security finding.",
    tools:
      "A course-approved isolated lab. Testing real systems requires separate written authorisation.",
  },
  {
    slug: "data-science",
    name: "Data science",
    line: "Work from a question to a reproducible result.",
    prerequisite:
      "Basic spreadsheets; introductory coding requirements depend on the module.",
    topics: [
      "Data cleaning and analysis",
      "Visualisation and interpretation, including Tableau or Power BI when scoped",
      "Python, R, SQL and modelling concepts",
    ],
    exercise:
      "Analyse a provided dataset and explain the result with reproducible steps.",
    tools:
      "The exact software, dataset and computing requirements are listed before enrolment.",
  },
  {
    slug: "azure-cloud",
    name: "Azure cloud",
    line: "Learn identity, deployment and cost basics.",
    prerequisite:
      "Basic IT concepts; module-specific prerequisites are confirmed before booking.",
    topics: [
      "Azure fundamentals and identity",
      "Virtual machines, databases and services",
      "Cost controls and certification preparation",
    ],
    exercise:
      "Describe a small deployment, its access rules and its expected costs.",
    tools:
      "Lab access and any Azure usage charges are disclosed. Certification exams are separate unless explicitly included.",
  },
  {
    slug: "hardware-networking",
    name: "Hardware & networking",
    line: "Diagnose devices and trace connectivity.",
    prerequisite:
      "Basic computer use. Hardware labs depend on the confirmed format.",
    topics: [
      "Computer components and troubleshooting",
      "Network setup and configuration",
      "Maintenance and connectivity checks",
    ],
    exercise:
      "Follow a diagnostic sequence and document a device or network fault.",
    tools:
      "Device, network and lab requirements are confirmed for the chosen module.",
  },
  {
    slug: "network-security",
    name: "Network security",
    line: "Understand segmentation, access and monitoring.",
    prerequisite:
      "Networking basics, including addressing and routing concepts.",
    topics: [
      "Firewalls and access rules",
      "VPNs and segmentation",
      "Intrusion detection and monitoring concepts",
    ],
    exercise:
      "Review a lab network and propose a justified access-control change.",
    tools:
      "A prepared network lab with safe sample data. No live customer systems are used.",
  },
] as const;

export const commitments = [
  {
    title: "A smaller, clear first step.",
    text: "Begin with a bounded discovery or pilot when the system or requirement is uncertain.",
  },
  {
    title: "A quote you can read.",
    text: "Separate labour, licences, hardware, travel, taxes and ongoing support.",
  },
  {
    title: "Ownership that is documented.",
    text: "Agree account access, source files, licences and exit responsibilities before work begins.",
  },
  {
    title: "A practical handover.",
    text: "Budget for documentation, a walkthrough and the agreed acceptance test.",
  },
] as const;
export const stages = [
  { name: "Define", text: "A written scope." },
  { name: "Agree", text: "A transparent quote." },
  { name: "Deliver", text: "Visible milestones." },
  { name: "Handover", text: "Accounts, files and documentation." },
] as const;
