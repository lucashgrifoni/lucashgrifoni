export type ExperienceStatus = 'present' | 'past';

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  arrangement: string;
  status: ExperienceStatus;
  /** Period as shown on LinkedIn, e.g. "Apr 2023 – Aug 2026". */
  statusLabel: string;
  /** Add PNG under public/ (e.g. assets/experience-logos/gol.png) when available */
  logoSrc?: string;
  logoAbbr: string;
  paragraphs: string[];
}

// Mirrors the Experience section on LinkedIn (company, role, period, location, employment type).
// Descriptions lead with impact and use only facts stated there.
export const experiences: Experience[] = [
  {
    id: 'gol',
    company: 'GOL Linhas Aéreas',
    role: 'Application Security Engineer',
    location: 'São Paulo, Brazil',
    arrangement: 'Remote · Contract',
    status: 'past',
    statusLabel: 'Apr 2023 – Aug 2026',
    logoAbbr: 'GOL',
    paragraphs: [
      'Reduced application risk without slowing delivery by defining and evolving the Application Security and DevSecOps strategy across the full software development lifecycle.',
      'Moved vulnerability detection earlier and cut late-cycle remediation effort by integrating SAST, DAST, SCA, IAST, and IaC security into CI/CD pipelines.',
      'Made Secure SDLC, Security by Design, and Shift Left part of everyday engineering, so development and DevOps teams adopted security earlier and more consistently.',
      'Proactively mitigated risks in applications, APIs, and critical integrations through threat modeling, secure code review, and remediation planning.',
      'Strengthened compliance by aligning security policies, standards, and processes with ISO 27001, NIST, and PCI DSS.',
      'Improved visibility and data-driven prioritization across technology, products, and business operations by managing vulnerability, code-analysis, and compliance tooling and establishing AppSec KPIs.',
    ],
  },
  {
    id: 'trademaster',
    company: 'Trademaster',
    role: 'Application Security Specialist',
    location: 'São Paulo, Brazil',
    arrangement: 'Remote · Full-time',
    status: 'past',
    statusLabel: 'Nov 2022 – Mar 2023',
    logoAbbr: 'TM',
    paragraphs: [
      'Strengthened protection of critical applications, products, and business assets by maturing Application Security practices across the SDLC.',
      'Made vulnerability identification and remediation more efficient through SAST, DAST, SCA, and IaC assessments.',
      'Increased the consistency and maturity of security controls by applying OWASP, NIST, OpenSAMM, and ISO 27001 with multidisciplinary teams.',
      'Expanded shared ownership of secure development by helping drive Security Champions, Security by Design, and DevSecOps initiatives.',
      'Drove continuous risk reduction by leading vulnerability management, defining metrics, and tracking remediation progress.',
      'Turned Application Security and pentest findings into actionable remediation plans through technical and executive reports.',
    ],
  },
  {
    id: 'avanade',
    company: 'Avanade',
    role: 'Senior Application Security Consultant',
    location: 'São Paulo, Brazil',
    arrangement: 'Remote · Full-time',
    status: 'past',
    statusLabel: 'Oct 2021 – Sep 2022',
    logoAbbr: 'AV',
    paragraphs: [
      'Enabled a practical, scalable, and business-aligned adoption of Application Security by integrating security into projects across every delivery phase.',
      'Supported safer technical decisions from the earliest stages through architecture reviews, risk analysis, threat modeling, and security requirements grounded in business rules.',
      'Improved application resilience by uncovering weaknesses with code review, SAST, SCA, DAST, and Web, Mobile, and API testing.',
      'Turned findings into feasible fixes by bridging security and engineering, from prioritization to resolution within delivery constraints.',
      'Helped reduce recurring vulnerabilities through secure coding training and awareness sessions.',
      'Translated ISO 27001, PCI DSS, and LGPD expectations into actionable security practices.',
    ],
  },
  {
    id: 'kpmg',
    company: 'KPMG',
    role: 'Mid-level Cyber Security Consultant',
    location: 'São Paulo, Brazil',
    arrangement: 'Remote · Full-time',
    status: 'past',
    statusLabel: 'Jun 2021 – Oct 2021',
    logoAbbr: 'KP',
    paragraphs: [
      'Gave clients a clear view of their security posture by identifying vulnerabilities, analyzing risk, and recommending improvements aligned with compliance and business priorities.',
      'Delivered Web, Mobile, and API pentests alongside SAST, DAST, and SCA, with actionable remediation guidance.',
      'Contributed to measurable risk reduction by guiding teams through remediation and tracking vulnerabilities to closure.',
      'Equipped technical and leadership audiences to act through reports with risk prioritization and business impact analysis.',
      'Kept multiple consulting engagements on time and in scope while raising assessment quality with OWASP, NIST, PTES, and MITRE.',
      'Helped clients adopt more secure delivery through Application Security, DevSecOps, and CI/CD security initiatives.',
    ],
  },
  {
    id: 'cysource',
    company: 'CySource',
    role: 'Cyber Security Monitor',
    location: 'Israel',
    arrangement: 'Remote · Part-time',
    status: 'past',
    statusLabel: 'Dec 2020 – Aug 2021',
    logoAbbr: 'CS',
    paragraphs: [
      'Accelerated hands-on learning in Web Application Hacking, Infrastructure Hacking, and Malware Analysis by supporting students through practical labs.',
      'Built safe, realistic lab environments with virtual networks, VMs, and sandboxes for offensive and defensive practice.',
      'Guided learners through SQL injection, XSS, CSRF, enumeration, and exploitation while reinforcing responsible use of offensive knowledge.',
      'Improved course quality and engagement by developing training materials and challenges and refining content with instructors.',
      'Helped students grow in pentesting, vulnerability analysis, and incident investigation through mentoring and continuous feedback.',
    ],
  },
  {
    id: 'mosyle',
    company: 'Mosyle',
    role: 'Security Researcher I',
    location: 'Winter Park, Florida, United States',
    arrangement: 'Remote · Full-time',
    status: 'past',
    statusLabel: 'Mar 2021 – Jun 2021',
    logoAbbr: 'MY',
    paragraphs: [
      'Improved visibility into risks affecting Apple ecosystems by researching vulnerabilities, emerging threats, and malicious behavior on macOS and iOS.',
      'Deepened understanding of malware behavior and evasion techniques through reverse engineering with IDA, Ghidra, radare2, and sandboxes.',
      'Supported faster detection and response by identifying IoCs, attack patterns, and suspicious behaviors.',
      'Enabled precise malware analysis without production impact by building controlled lab environments.',
      'Reinforced the security posture by proposing defensive improvements with development and security teams and sharing research on threat trends and mitigations.',
    ],
  },
];
