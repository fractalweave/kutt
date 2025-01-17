require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    SITE_NAME: process.env.SITE_NAME,
    DEFAULT_DOMAIN: process.env.DEFAULT_DOMAIN,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    REPORT_EMAIL: process.env.REPORT_EMAIL,
    DISALLOW_ANONYMOUS_LINKS: process.env.DISALLOW_ANONYMOUS_LINKS,
    DISALLOW_REGISTRATION: process.env.DISALLOW_REGISTRATION,
    SENTRY_PUBLIC_DSN: process.env.SENTRY_PUBLIC_DSN,
  }
};
