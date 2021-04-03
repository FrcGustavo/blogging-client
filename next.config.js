const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  }
});