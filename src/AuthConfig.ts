import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:9900/auth/realms/your-project',
  redirectUri: 'http://localhost:',
  clientId: 'fe-app',
  scope: 'openid profile email',
  requireHttps: false,
  showDebugInformation: true,
};
