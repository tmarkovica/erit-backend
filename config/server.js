module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',
    ['qJPWGKV5mkk2styZWNAXJg==','djzMXMF5YwbrFelUUi/y5Q==','fRzhVGN9sblicSwsnBtH0A==','h8ZdFSPwYExojCWgBpFo7g==']
    ),
  },
});
