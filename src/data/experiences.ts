export type ExperienceStatus = 'present' | 'past';

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  arrangement: string;
  status: ExperienceStatus;
  statusLabel: string;
  /** Add PNG under public/ (e.g. assets/experience-logos/gol.png) when available */
  logoSrc?: string;
  logoAbbr: string;
  paragraphs: string[];
}

export const experiences: Experience[] = [
  {
    id: 'gol',
    company: 'GOL Linhas Aéreas',
    role: 'Application Security Specialist',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'present',
    statusLabel: 'Present',
    logoAbbr: 'GOL',
    paragraphs: [
      'Lead Application Security and DevSecOps initiatives across software delivery workflows in a regulated aviation environment, helping embed security into CI/CD pipelines, APIs, containers, and cloud-native applications without compromising delivery speed. Partner closely with engineering, architecture, and delivery teams to drive secure design reviews, threat modeling sessions, and risk-based remediation strategies for critical systems and digital products. Strengthen the overall security posture by improving pipeline security coverage, standardizing security controls, and expanding the use of automated validation across development workflows.',
      'Support governance and technical decision-making through security guidelines, control adoption, and practical recommendations aligned with business and operational needs. Actively improve remediation efficiency by helping teams prioritize vulnerabilities based on risk, exploitability, and business impact rather than severity alone. Contribute to a more scalable security culture through developer enablement, security-by-design practices, and continuous improvement of AppSec and DevSecOps maturity across software delivery environments.',
    ],
  },
  {
    id: 'b3-digitas',
    company: 'B3 Digitas',
    role: 'DevSecOps Engineer',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'B3',
    paragraphs: [
      'Led DevSecOps and security engineering initiatives for digital financial products in highly regulated, fast-moving, and innovation-driven environments. Embedded security controls into CI/CD workflows, infrastructure pipelines, and application delivery processes through automation, secure development practices, and control orchestration. Worked across cloud, APIs, containers, and delivery architecture to improve resilience, reduce operational security gaps, and strengthen engineering confidence in secure releases.',
      'Supported teams in adopting more mature DevSecOps patterns by integrating validation gates, secure configuration practices, and pipeline-focused security checks into day-to-day delivery. Partnered with technical stakeholders to align security initiatives with product velocity, compliance expectations, and platform reliability goals. Helped build a stronger security foundation by turning security into an operational enabler rather than a late-stage blocker.',
    ],
  },
  {
    id: 'ignit',
    company: 'Ignít',
    role: 'Application Security Specialist',
    location: 'Europe',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'IG',
    paragraphs: [
      'Designed and strengthened Application Security and DevSecOps practices across the software lifecycle in distributed engineering environments with cross-functional and remote collaboration. Conducted threat modeling, secure code reviews, and offensive and defensive validations for web, mobile, and API applications, helping identify design weaknesses and implementation risks earlier in the lifecycle. Supported the evolution of secure development maturity by combining technical assessments with governance, measurement, enablement, and compliance-aligned improvements.',
      'Worked closely with engineering teams to make security practices more practical, repeatable, and better integrated into delivery routines. Helped teams improve remediation quality and decision-making through clearer prioritization, better technical guidance, and stronger alignment between security and delivery outcomes. Contributed to the development of a more measurable and sustainable AppSec posture across products and engineering workflows.',
    ],
  },
  {
    id: 'algar',
    company: 'Algar Telecom',
    role: 'Application Security Specialist',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'AL',
    paragraphs: [
      'Led Application Security strategy and implementation across development, architecture, and operations teams in a large-scale telecommunications environment with broad technical complexity and delivery demands. Integrated SAST, DAST, SCA, and IAST into CI/CD workflows while promoting Security by Design and Shift Left practices across software development and solution architecture discussions. Worked to improve engineering maturity by defining standards, supporting control adoption, and guiding teams on how to build and operate applications more securely from the start.',
      'Partnered with technical teams to reduce application risk, increase security visibility, and make vulnerability management more actionable and sustainable. Supported secure delivery by bringing security reviews, tooling, and governance closer to engineering execution. Helped establish stronger foundations for continuous security adoption across multiple teams and delivery streams.',
    ],
  },
  {
    id: 'trademaster',
    company: 'Trademaster',
    role: 'Application Security Engineer',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'TM',
    paragraphs: [
      'Advanced secure software development practices and application security improvements across product delivery environments, helping teams strengthen security posture without introducing unnecessary delivery friction. Improved pipeline validation, secure coding practices, and risk mitigation initiatives across engineering workflows by bringing more consistency to how security controls were applied and monitored. Worked closely with development teams to encourage more secure delivery patterns through technical guidance, control implementation, and practical security recommendations.',
      'Supported the maturation of AppSec routines by helping teams identify weaknesses earlier and respond more effectively to remediation needs. Contributed to a more structured security approach across the lifecycle, balancing implementation quality, speed, and risk reduction. Helped reinforce the idea of security as part of product engineering rather than a separate afterthought.',
    ],
  },
  {
    id: 'avanade',
    company: 'Avanade',
    role: 'Senior Application Security Engineer',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'AV',
    paragraphs: [
      'Led secure development and application security initiatives across enterprise environments, partnering with engineering teams throughout different delivery phases to improve software resilience and reduce exposure. Conducted security reviews, application validation activities, and risk-oriented assessments to help identify weaknesses in design, implementation, and operational security controls. Worked with technical teams to improve the security quality of applications through practical guidance, engineering-focused recommendations, and stronger alignment between security expectations and development execution.',
      'Supported governance and delivery improvements by helping standardize security practices and make remediation efforts more effective and scalable. Acted as a bridge between technical security requirements and real-world software delivery constraints. Helped strengthen enterprise security posture through a combination of technical depth, delivery awareness, and continuous improvement initiatives.',
    ],
  },
  {
    id: 'kpmg',
    company: 'KPMG',
    role: 'Mid-Level Cybersecurity Consultant',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'KP',
    paragraphs: [
      'Delivered cybersecurity assessments focused on governance, risk, compliance, and technical security controls across different client environments and business contexts. Partnered with both technical and business teams to evaluate security posture, identify process and control gaps, and improve alignment between risk findings and remediation priorities. Translated assessment results into structured improvement plans, helping organizations move from point-in-time findings to more sustainable risk reduction actions.',
      'Contributed to security maturity improvements by connecting technical observations with governance expectations, compliance frameworks, and operational realities. Supported clients in understanding not only what the risks were, but also how to address them in a more organized and business-aware way. Strengthened consulting and analytical capabilities through exposure to diverse environments, stakeholder profiles, and security challenges.',
    ],
  },
  {
    id: 'mosyle',
    company: 'Mosyle',
    role: 'Security Researcher I',
    location: 'Brazil',
    arrangement: 'Remote',
    status: 'past',
    statusLabel: 'Past role',
    logoAbbr: 'MY',
    paragraphs: [
      'Contributed to security research, technical analysis, and malware-focused investigations across Apple ecosystems, with emphasis on understanding behaviors, patterns, and technical security implications in MacOS and iOS-related contexts. Supported vulnerability analysis and broader technical research activities, helping strengthen the foundation of security assessment, reverse-engineering thinking, and investigative methodology. Worked on analytical activities that improved internal understanding of threats, system behavior, and defensive opportunities.',
      'Strengthened internal security knowledge through structured technical investigation, research support, and security-oriented analysis across specialized environments. Built stronger fundamentals in research-driven security work by combining curiosity, technical depth, and analytical discipline. This role helped shape a more investigative and detail-oriented approach that continued to influence later work in Application Security and DevSecOps.',
    ],
  },
];
