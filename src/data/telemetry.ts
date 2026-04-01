/**
 * Mensagens da camada decorativa de telemetria AppSec / DevSecOps.
 * Ajuste a ordem ou o texto aqui sem tocar no markup do componente.
 */
export type TelemetryGlyph =
  | 'shield'
  | 'scan'
  | 'terminal'
  | 'pipeline'
  | 'container'
  | 'lock'
  | 'alert'
  | 'check'
  | 'git'
  | 'cloud'
  | 'policy';

export interface TelemetryLine {
  text: string;
  glyph: TelemetryGlyph;
}

export const telemetryLines: TelemetryLine[] = [
  { text: 'Scan Complete', glyph: 'check' },
  { text: 'Scan Failed', glyph: 'alert' },
  { text: 'Secret Leak Detected', glyph: 'lock' },
  { text: 'SAST Running…', glyph: 'scan' },
  { text: 'Policy Passed', glyph: 'policy' },
  { text: 'Container Hardened', glyph: 'container' },
  { text: 'Dependency Review Started', glyph: 'git' },
  { text: 'Risk Accepted · CVE Pending Mitigation', glyph: 'alert' },
  { text: 'DAST Findings Triaged', glyph: 'scan' },
  { text: 'Pipeline Blocked by Security Gate', glyph: 'pipeline' },
  { text: 'Semgrep · 0 critical', glyph: 'terminal' },
  { text: 'Threat Model Updated', glyph: 'shield' },
  { text: 'Kubernetes RBAC Review', glyph: 'container' },
  { text: 'Checkmarx AST Completed', glyph: 'scan' },
  { text: 'Snyk Policy Passed', glyph: 'check' },
  { text: 'GitHub Actions Secure Gate', glyph: 'git' },
  { text: 'IaC Misconfiguration Detected', glyph: 'cloud' },
  { text: 'Release Blocked by Critical Finding', glyph: 'alert' },
  { text: 'OWASP ASVS Review', glyph: 'shield' },
  { text: 'Container Image Verified', glyph: 'container' },
  { text: 'Branch Protection Active', glyph: 'lock' },
  { text: 'Break Build Enabled', glyph: 'pipeline' },
];
