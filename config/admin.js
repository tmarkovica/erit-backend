module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', ['82228246c46799b909394dc97cee09eff75e8e795df2da2913fe4bbb96e5beea']),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', ['G+bHg+IJL9uIhyx7Cm3+xg==']),
  },
});
