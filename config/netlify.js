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
        // https://web.dev/trusted-types/
        // `require-trusted-types-for 'script'`,
        `script-src 'self' 'unsafe-eval' 'unsafe-inline' https:`, // 'sha256-sH4yPnnlZ9QdUT1I/FPmXXy51PSFhE35uqKJFXMik/4=' 'strict-dynamic'
        `style-src 'self' 'unsafe-inline'`,
        `script-src-elem 'self' https:`,
      ]),
      headerCreate('Content-Security-Policy-Report-Only', [
        // https://web.dev/trusted-types/
        `require-trusted-types-for 'script'`
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
        // https://github.com/w3c/webappsec-feature-policy/blob/master/policies/loading-image-default-eager.md#using-the-feature
        `loading-image-default-eager 'none'`,
        `magnetometer 'none'`,
        `microphone 'none'`,
        `midi 'none'`,
        // https://github.com/w3c/webappsec-feature-policy/blob/master/policies/optimized-images.md#oversized-images
        `oversized-images *(2)`,
        `payment 'none'`,
        `picture-in-picture 'none'`,
        `speaker 'none'`,
        `sync-xhr 'none'`,
        // https://github.com/w3c/webappsec-feature-policy/blob/master/policies/optimized-images.md#unoptimized-lossy-images-policy-and-unoptimized-lossless-images-policy
        `unoptimized-lossy-images *(0.625)`,
        `unoptimized-lossless-images 'none'`,
        // https://github.com/w3c/webappsec-feature-policy/blob/master/policies/unsized-media.md
        `unsized-media 'none'`,
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
