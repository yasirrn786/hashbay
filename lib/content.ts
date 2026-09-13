export const capabilities = [
  { id: 'infrastructure', name: 'Infrastructure', line: 'The foundation for everything.', description: 'Office infrastructure, data centers, networks, and the systems that support everyday operations.', items: ['Office infrastructure and data center development', 'Network study, design, and execution', 'Hardware, OS, and peripheral upgrades', 'CCTV installation and maintenance'] },
  { id: 'cloud', name: 'Cloud', line: 'Build beyond the physical.', description: 'Migration, optimization, and ongoing management across AWS, Microsoft Azure, and Google Cloud.', items: ['Cloud migration', 'Environment optimization', 'Ongoing cloud management'] },
  { id: 'security', name: 'Cybersecurity', line: 'Strengthen every connection.', description: 'Security services that address threats, vulnerabilities, and the protocols protecting technology environments.', items: ['Threat monitoring', 'Vulnerability assessments', 'Penetration testing', 'Security protocol implementation'] },
  { id: 'software', name: 'Software', line: 'Make technology work your way.', description: 'Web, mobile, and enterprise applications, from requirement analysis through deployment and maintenance.', items: ['Custom application development', 'Software implementation', 'Deployment and maintenance'] },
  { id: 'support', name: 'Support & staffing', line: 'People behind the systems.', description: 'IT manpower consultancy, customer support, service desk, and annual maintenance for operational continuity.', items: ['IT manpower consultancy', 'Customer support and service desk', 'Facility Management Services', 'Hardware and OS support under AMC', 'Multi-vendor annual maintenance support'] },
] as const;

export const stages = [
  { name: 'Plan', heading: 'Start with the right questions.', text: 'Connect project requirements with people, processes, and systems. Establish the scope of the technology work ahead.', detail: 'Consulting / Requirements / Network study' },
  { name: 'Build', heading: 'Give the plan a working foundation.', text: 'Bring infrastructure, networks, cloud environments, and custom software into operation around defined project needs.', detail: 'Infrastructure / Cloud / Software' },
  { name: 'Secure', heading: 'Strengthen what your business relies on.', text: 'Identify vulnerabilities, monitor threats, test defenses, and implement security protocols across your environment.', detail: 'Assessment / Testing / Threat monitoring' },
  { name: 'Support', heading: 'Keep the work moving forward.', text: 'Support the systems and the people using them through service desk, maintenance, and professional services.', detail: 'Service desk / AMC / Staffing' },
] as const;

export const programs = [
  { name: 'Cyber Security', category: 'Security', description: 'Understand threats. Build the skills to address them.', topics: ['Security fundamentals and threat mitigation', 'Practical tools including Wireshark'] },
  { name: 'Data Science', category: 'Development', description: 'Turn data into analysis, models, and understanding.', topics: ['Data analysis, visualization, and predictive modeling', 'Python, R, SQL, Tableau, and Power BI'] },
  { name: 'Azure Cloud Computing', category: 'Infrastructure', description: 'Develop a practical foundation in Microsoft Azure.', topics: ['Azure fundamentals, virtual machines, databases, and services', 'Certification preparation'] },
  { name: 'Computer Hardware & Networking', category: 'Infrastructure', description: 'Get closer to the systems behind everyday technology.', topics: ['Hardware basics and troubleshooting', 'Network setup, configuration, and maintenance'] },
  { name: 'Web Development', category: 'Development', description: 'Build for the web, from interfaces to full-stack applications.', topics: ['HTML, CSS, JavaScript, and React', 'Full-stack application development'] },
  { name: 'Network Security', category: 'Security', description: 'Explore the technologies that protect connected environments.', topics: ['Firewalls and virtual private networks (VPNs)', 'Intrusion detection and prevention systems (IDS/IPS)'] },
] as const;
