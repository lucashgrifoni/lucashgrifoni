export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: 'available' | 'alpha' | 'in-development';
  what: string[];
  why: string[];
  problems: string[];
  stack: string[];
  repoUrl: string;
  docsUrl?: string;
  logoSrc: string;
}

export const projects: Project[] = [
  {
    id: 'appsec-express',
    name: 'AppSec Express',
    tagline:
      'Application security and DevSecOps services that integrate directly into your SDLC without slowing delivery.',
    status: 'in-development',
    what: [
      'AppSec Express is a specialized service offering that brings application security and DevSecOps engineering directly into teams that need it without the overhead of building an internal program from scratch.',
      'I offer SAST, SCA, IaC security, secrets detection, threat modeling, secure code review, CI/CD security integration, and vulnerability management as a structured engagement, not a one-time audit.',
    ],
    why: [
      "Most companies either can't afford enterprise security platforms or don't have the headcount to operationalize them. AppSec Express exists to close that gap with high-quality execution and measurable outcomes.",
      'My goal is to transform security into a delivery accelerator with clear priorities, verifiable results, and a path for teams to own it long-term.',
    ],
    problems: [
      'Teams shipping without any security controls in the pipeline',
      'No structured process for threat modeling or secure code review',
      'Vulnerability findings with no prioritization or remediation path',
      'Security treated as a gate at the end instead of a control at the start',
    ],
    stack: [
      'SAST',
      'SCA',
      'Threat Modeling',
      'CI/CD Security',
      'Checkmarx',
      'Snyk',
      'GitHub Actions',
      'Azure DevOps',
    ],
    repoUrl: 'https://github.com/lucashgrifoni/AppSec-Express',
    logoSrc: 'assets/logos/appsec-express.png',
  },
  {
    id: 'oss-security-policy-as-code-starter-kit',
    name: 'OSS Security Policy as Code Starter Kit',
    tagline:
      'Open source policy-as-code starter kit that helps teams enforce baseline security controls across repositories, pipelines, and release workflows.',
    status: 'in-development',
    what: [
      'OSS Security Policy as Code Starter Kit is a practical open source foundation for teams that want to secure their repositories and CI/CD workflows with reusable, versioned policies.',
      'It provides ready-to-use security rules, validation patterns, and automation examples for common areas such as GitHub Actions hardening, branch protection, secret prevention, dependency governance, and release safety checks.',
      'Instead of leaving security expectations as documentation only, the project turns them into enforceable controls that can be tested, reviewed, and applied consistently across projects.',
    ],
    why: [
      'Most open source and internal engineering teams know they need stronger baseline security, but the implementation is usually fragmented. Controls live in scattered docs, tribal knowledge, or manual checklists, and enforcement is inconsistent across repositories.',
      'I built OSS Security Policy as Code Starter Kit to make secure-by-default repository and pipeline governance easier to adopt. The goal is operational clarity: take common security expectations and express them as reusable, auditable policy-as-code building blocks that teams can actually apply.',
    ],
    problems: [
      'No consistent baseline security controls across repositories and CI/CD workflows',
      'Security requirements documented but not actually enforced in automation',
      'Weak workflow hardening, permissions, and pipeline governance',
      'Missing guardrails for secrets, dependency hygiene, and release protection',
    ],
    stack: [
      'Rego',
      'OPA',
      'GitHub Actions',
      'Policy as Code',
      'DevSecOps',
      'OpenSSF',
      'CI/CD Security',
    ],
    repoUrl: 'https://github.com/lucashgrifoni/OSS-Security-Policy-as-Code-Starter-Kit',
    logoSrc: 'assets/logos/oss-security-policy-as-code.png',
  },
  {
    id: 'app-suite-modeling',
    name: 'App Suite Modeling',
    tagline:
      'Multi-methodology threat modeling platform with CLI, API, and visual interface.',
    status: 'in-development',
    what: [
      'App Suite Modeling is a threat modeling platform that supports STRIDE, LINDDUN, NIST, and OCTAVE Allegro methodologies through a unified interface available via CLI, REST API, and a web UI.',
      'It structures the threat modeling process so that teams can execute sessions consistently, track threats across releases, and integrate modeling outputs directly into their SDLC.',
    ],
    why: [
      'Threat modeling is one of the most valuable security activities and also one of the most inconsistently executed. Most teams either skip it or run ad-hoc sessions with no structure, no output format, and no traceability.',
      'I wanted a tool that any engineer could pick up, not just security specialists. CLI-first so it fits into existing workflows. Multi-methodology so teams can choose the framework that fits their context.',
    ],
    problems: [
      'No accessible threat modeling tooling for non-security engineers',
      'Sessions run ad-hoc with no consistent output or traceability',
      'Methodology lock-in or tools that support only STRIDE',
      'No path to integrate threat modeling outputs into CI/CD',
    ],
    stack: [
      'Python',
      'FastAPI',
      'CLI',
      'STRIDE',
      'LINDDUN',
      'OCTAVE Allegro',
      'NIST',
      'Docker',
    ],
    repoUrl: 'https://github.com/lucashgrifoni/App_Suite_Modeling',
    logoSrc: 'assets/logos/app-suite-modeling.png',
  },
  {
    id: 'ctf-platform',
    name: 'CTF Platform',
    tagline:
      'Defensive AppSec and DevSecOps CTF with 112+ challenges organized by severity and domain.',
    status: 'in-development',
    what: [
      'A monorepo CTF platform built specifically for defensive application security and DevSecOps training. Challenges cover SAST findings, SCA vulnerabilities, secrets exposure, IaC misconfigurations, container security, and CI/CD attack vectors.',
      'Each challenge is self-contained, tagged by severity tier and domain, and designed to mirror real findings that engineers encounter in actual codebases and pipelines.',
    ],
    why: [
      "Existing CTF platforms are almost exclusively offensive: exploitation, reverse engineering, binary. They don't address the defensive skills an AppSec or DevSecOps engineer needs daily.",
      'I built this platform to fill that gap with challenges grounded in real-world scenarios: misconfigurations developers actually write, dependency issues that slip through reviews, and pipeline weaknesses that are easy to overlook.',
    ],
    problems: [
      'No practical defensive CTF content for AppSec/DevSecOps engineers',
      'Training materials that are too theoretical without hands-on context',
      'No structured progression from low to critical severity',
      'No coverage of pipeline and IaC security scenarios',
    ],
    stack: [
      'Docker',
      'Python',
      'SAST',
      'SCA',
      'IaC Security',
      'Secrets Detection',
      'Container Security',
      'CI/CD Security',
    ],
    repoUrl: 'https://github.com/lucashgrifoni/CTF-Platform-AppSec-DevSecOps',
    logoSrc: 'assets/logos/ctf-platform.png',
  },
  {
    id: 'training-labs',
    name: 'AppSec & DevSecOps Training Labs',
    tagline:
      'Ready-to-use hands-on labs covering the full AppSec and DevSecOps stack. Clone it, run it.',
    status: 'available',
    what: [
      'A repository of self-contained training labs covering the core AppSec and DevSecOps domains: SAST, SCA, IaC security, secrets detection, container security, threat modeling, and CI/CD security controls.',
      'Each lab includes setup instructions, a vulnerable or misconfigured target environment, guided exercises, and expected outcomes. No external platform required — everything runs locally.',
    ],
    why: [
      'Most AppSec training either lives behind a paid platform or is so disconnected from real tooling that engineers cannot apply it directly to their pipelines.',
      'I wanted something you could fork today and use tomorrow in an internal training session, a Security Champions workshop, or personal practice — without any dependencies beyond Docker.',
    ],
    problems: [
      'Existing training requires expensive platform subscriptions',
      "Labs don't reflect real pipeline and tooling environments",
      'No practical material for Security Champions programs',
      'Security training disconnected from engineering workflows',
    ],
    stack: [
      'Docker',
      'GitHub Actions',
      'Checkmarx',
      'Snyk',
      'Trivy',
      'Terraform',
      'Python',
      'Bash',
    ],
    repoUrl: 'https://github.com/lucashgrifoni/AppSec_DevSecOps-Training-Labs',
    logoSrc: 'assets/logos/training-labs.png',
  },
];
