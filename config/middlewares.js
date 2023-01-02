module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// https://dev.to/darkmavis1980/how-to-fix-the-content-security-policy-directive-with-strapi-v4-and-upload-on-aws-s3-3bp2
/* module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // cloudinary images
            'lh3.googleusercontent.com', // google avatars
            'platform-lookaside.fbsbx.com', // facebook avatars
            'dl.airtable.com', // strapi marketplace
            `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
          ],
          'media-src': ["'self'", 'data:', 'blob:', `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
]; */

// https://github.com/strapi/strapi/issues/11637#issuecomment-977244572
module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
