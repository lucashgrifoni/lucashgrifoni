export interface TechnicalCase {
  id: string;
  title: string;
  context: string;
  approach: string;
  outcome: string;
}

export const technicalCases: TechnicalCase[] = [
  {
    id: 'cicd-security-enablement',
    title: 'CI/CD Security Enablement',
    context:
      'Enterprise development pipelines with limited automated security validation and excessive manual effort.',
    approach:
      'Integrated SAST, SCA, secrets detection, and IaC scanning into CI/CD workflows using security gates, policy validation, and break-the-build strategies.',
    outcome:
      'Increased security coverage, reduced manual validation effort, and improved early vulnerability detection before production.',
  },
  {
    id: 'threat-modeling-secure-architecture',
    title: 'Threat Modeling & Secure Architecture',
    context:
      'Critical web, mobile, and API applications in regulated and high-risk business environments.',
    approach:
      'Conducted threat modeling using STRIDE and OWASP methodologies, reviewed architecture decisions, and guided secure design remediation plans.',
    outcome:
      'Reduced exposure to fraud, insecure integrations, design flaws, and data leakage risks.',
  },
  {
    id: 'developer-enablement-security-culture',
    title: 'Developer Enablement & Security Culture',
    context:
      'Engineering teams needed scalable security support without compromising agility and product velocity.',
    approach:
      'Created secure coding initiatives, training sessions, practical guidance, and Security Champions programs to improve ownership and collaboration.',
    outcome:
      'Strengthened security culture, increased remediation engagement, and improved alignment between security and engineering teams.',
  },
];
