import type { Core } from '@strapi/strapi';

export default ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'gmail',
        auth: {
          user: 'godsonsunny10@gmail.com',
          pass: env('EMAIL_APP_PASSWORD'), // ✅ secure
        },
      },
      settings: {
        defaultFrom: 'godsonsunny10@gmail.com',
        defaultReplyTo: 'godsonsunny10@gmail.com',
      },
    },
  },
});