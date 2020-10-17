function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error('Missing environment token');
  }

  return value;
}

export const websiteLink = getEnvOrFail('WEBSITE_LINK');

export const sendGridAPIKey = getEnvOrFail('SENDGRID_API_KEY');
export const sendGridSender = getEnvOrFail('SENDGRID_API_SENDER');

export const sendGridForgotPasswordTemplate = getEnvOrFail(
  'SENDGRID_TEMPLATE_FORGOT_PASSWORD'
);

export const maxAccountsPerIP = Number(getEnvOrFail('MAX_ACCOUNTS_PER_IP'));
export const googleRecaptchaKey = getEnvOrFail('GOOGLE_RECAPTCHA_KEY');
