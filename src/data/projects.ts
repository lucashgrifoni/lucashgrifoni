export type ProjectStatus = 'released' | 'development' | 'private';

export type ProjectIcon =
  | 'policy'
  | 'evidence'
  | 'key'
  | 'flask'
  | 'rules'
  | 'agent'
  | 'chart'
  | 'model'
  | 'flag';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  icon: ProjectIcon;
  highlights: string[];
  stack: string[];
  /** First link is the main action. Leave empty for private projects without public pages. */
  links: ProjectLink[];
}

const GH = 'https://github.com/lucashgrifoni/';

export const statusLabels: Record<ProjectStatus, string> = {
  released: 'Released',
  development: 'In development',
  private: 'Private',
};

// Descriptions come from each repository README. Keep claims inside what the README states.
export const projects: Project[] = [
  {
    id: 'oss-security-policy-as-code-starter-kit',
    name: 'OSS Security Policy as Code Starter Kit',
    tagline:
      'Policy-as-code starter kit for OSS repository governance and CI/CD hygiene across GitHub, GitLab, Azure DevOps, and AWS.',
    status: 'released',
    icon: 'policy',
    highlights: [
      'Reusable, versioned policies for workflow hardening, branch protection, and release safety',
      'Secret prevention and dependency governance expressed as enforceable checks',
      'Security expectations turned into controls that can be tested and reviewed',
    ],
    stack: ['Policy as Code', 'OPA', 'Rego', 'GitHub Actions', 'GitLab CI', 'Azure DevOps'],
    links: [
      { label: 'Repository', url: `${GH}OSS-Security-Policy-as-Code-Starter-Kit` },
      { label: 'Docs', url: 'https://lucashgrifoni.github.io/OSS-Security-Policy-as-Code-Starter-Kit/' },
    ],
  },
  {
    id: 'secure-sdlc-evidence-collector',
    name: 'Secure SDLC Evidence Collector',
    tagline:
      'CLI that answers one question: which evidence proves this release followed a minimum Secure SDLC process?',
    status: 'released',
    icon: 'evidence',
    highlights: [
      'Collects SAST, SCA, secrets, SBOM, tests, reviews, and approvals into one auditable bundle per release',
      'Maps evidence to 13 controls aligned with NIST SSDF and OWASP SAMM',
      'Emits a deterministic readiness verdict and a release-gate exit code for pipelines',
    ],
    stack: ['Python', 'CLI', 'SARIF', 'SBOM', 'NIST SSDF'],
    links: [
      { label: 'Repository', url: `${GH}Secure-SDLC-Evidence-Collector` },
      { label: 'PyPI', url: 'https://pypi.org/project/secure-sdlc-evidence-collector/' },
    ],
  },
  {
    id: 'secrets-hygiene-kit',
    name: 'Secrets Hygiene Kit',
    tagline: 'Turns secret-scanner reports into consistent CI decisions and response guidance.',
    status: 'released',
    icon: 'key',
    highlights: [
      'Normalizes Gitleaks, Betterleaks, TruffleHog, and detect-secrets findings',
      'Enforces expiring exceptions, and an expired waiver blocks the build',
      'Exports JSON, SARIF 2.1.0, Markdown, and a pull request comment draft',
    ],
    stack: ['Python', 'secguard CLI', 'SARIF', 'Gitleaks', 'TruffleHog'],
    links: [
      { label: 'Repository', url: `${GH}Secrets-Hygiene-Kit` },
      { label: 'Docs', url: 'https://lucashgrifoni.github.io/Secrets-Hygiene-Kit/' },
    ],
  },
  {
    id: 'training-labs',
    name: 'AppSec & DevSecOps Training Labs',
    tagline: 'Catalog of intentionally vulnerable applications and environments for hands-on AppSec and DevSecOps training.',
    status: 'released',
    icon: 'flask',
    highlights: [
      'Self-contained labs for SAST, SCA, IaC, secrets, containers, and CI/CD security',
      'Each lab ships setup steps, a vulnerable target, guided exercises, and expected outcomes',
      'Runs locally, ready for Security Champions workshops or personal practice',
    ],
    stack: ['Docker', 'GitHub Actions', 'Trivy', 'Terraform', 'Python'],
    links: [
      { label: 'Repository', url: `${GH}AppSec_DevSecOps-Training-Labs` },
      { label: 'Docs', url: 'https://lucashgrifoni.github.io/AppSec_DevSecOps-Training-Labs/' },
    ],
  },
  {
    id: 'appsec-rules-pack',
    name: 'AppSec Rules Pack',
    tagline: 'A versioned AppSec rules pack and the validator that keeps it honest.',
    status: 'development',
    icon: 'rules',
    highlights: [
      'Baseline of 29 review rules, each with a compliant and a violating example',
      'Mappings to OWASP ASVS 5.0, API Security Top 10, OWASP Top 10:2025, CWE, and NIST SSDF',
      'CLI validates packs and review records against a JSON Schema contract for CI gates',
    ],
    stack: ['Python', 'JSON Schema', 'CLI', 'OWASP ASVS'],
    links: [
      { label: 'Repository', url: `${GH}AppSec-Rules-Pack` },
      { label: 'Docs', url: 'https://lucashgrifoni.github.io/AppSec-Rules-Pack/' },
    ],
  },
  {
    id: 'ai-agent-security',
    name: 'AI Agent Security',
    tagline: 'Reproducible testbed for adversarial regression checks against AI agents and MCP tool boundaries.',
    status: 'development',
    icon: 'agent',
    highlights: [
      '22 probes across 7 attack categories mapped to the OWASP LLM, MCP, and Agentic Top 10 lists',
      'Deterministic, rules-only scoring: no LLM decides the result',
      'Markdown and SARIF 2.1.0 reports plus a fail-closed release gate',
    ],
    stack: ['Python', 'MCP', 'SARIF', 'OWASP LLM Top 10'],
    links: [
      { label: 'Repository', url: `${GH}AI-Agent-Security` },
      { label: 'Releases', url: `${GH}AI-Agent-Security/releases` },
    ],
  },
  {
    id: 'github-org-security-dashboard',
    name: 'GitHub Org Security Dashboard',
    tagline: 'CLI that consolidates security controls per GitHub repository into a posture report.',
    status: 'development',
    icon: 'chart',
    highlights: [
      'Offline by default; opt-in live collection reads only repositories visible to the token',
      'Per-control coverage and a deterministic risk rating for each repository',
      'Markdown or JSON output, plus a comparison between two snapshots',
    ],
    stack: ['Python', 'Typer', 'GitHub API'],
    links: [
      { label: 'Repository', url: `${GH}GitHub-Org-Security-Dashboard` },
      { label: 'Releases', url: `${GH}GitHub-Org-Security-Dashboard/releases` },
    ],
  },
  {
    id: 'app-suite-modeling',
    name: 'App Suite Modeling',
    tagline: 'Threat modeling as code with one versioned model behind a CLI, a REST API, and a web UI.',
    status: 'private',
    icon: 'model',
    highlights: [
      'One canonical .otm.yaml model powers every interface',
      'Multi-methodology analysis: STRIDE, LINDDUN, PASTA, and PLOT4ai',
      'Threat models versioned and reviewed like code',
    ],
    stack: ['Python', 'FastAPI', 'CLI', 'STRIDE', 'LINDDUN'],
    links: [{ label: 'Docs', url: 'https://lucashgrifoni.github.io/App-Suite-Modeling/' }],
  },
  {
    id: 'ctf-platform',
    name: 'CTF Platform',
    tagline: 'Defensive AppSec and DevSecOps CTF with 112+ challenges organized by severity and domain.',
    status: 'private',
    icon: 'flag',
    highlights: [
      'Challenges cover SAST, SCA, secrets, IaC, container, and CI/CD scenarios',
      'Structured progression from low to critical severity',
      'Mirrors findings engineers meet in real codebases and pipelines',
    ],
    stack: ['Docker', 'Python', 'IaC Security', 'Container Security'],
    links: [],
  },
];
