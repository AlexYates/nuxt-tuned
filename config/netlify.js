/**
 * @name headerCreate
 * @param {string} name
 * @param {Array<string>} rules
 * @returns {string}
 */
const headerCreate = (name, rules) => `${name}: ${rules.join('; ')}`

// 'sha256-sH4yPnnlZ9QdUT1I/FPmXXy51PSFhE35uqKJFXMik/4=' https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/`

// https://github.com/aceforth/nuxt-netlify#headers
const netlify = {
  headers: {
    '/*': [
      headerCreate('Content-Security-Policy', [
        `default-src 'none'`,
        `base-uri 'self'`,
        `connect-src 'self'`,
        `form-action 'self'`,
        `img-src 'self'`,
        `manifest-src 'self'`,
        `script-src 'self' 'sha256-sH4yPnnlZ9QdUT1I/FPmXXy51PSFhE35uqKJFXMik/4=' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline',
        `style-src 'self' 'unsafe-inline'`,
        `require-trusted-types-for 'script'`, // Experimental API
      ]),
      headerCreate('Feature-Policy', [
        `accelerometer 'none'`,
        `ambient-light-sensor 'none'`,
        `autoplay 'none'`,
        `camera 'none'`,
        `encrypted-media 'none'`,
        `fullscreen 'self'`,
        `geolocation 'none'`,
        `gyroscope 'none'`,
        `magnetometer 'none'`,
        `microphone 'none'`,
        `midi 'none'`,
        `payment 'none'`,
        `picture-in-picture 'none'`,
        `speaker 'none'`,
        `sync-xhr 'none'`,
        `usb 'none'`,
        `vr 'none'`,
      ]),
      headerCreate('Referrer-Policy', ['no-referrer']),
      headerCreate('X-Content-Type-Options', ['nosniff']),
      headerCreate('X-Frame-Options', ['DENY']),
      headerCreate('X-XSS-Protection', ['1', 'mode=block']),
    ],
    '/favicon.ico': [
      headerCreate('Cache-Control', ['immutable', 'max-age=31536000', 'public']),
    ]
  }
}

export default netlify
