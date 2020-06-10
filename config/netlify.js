// https://github.com/aceforth/nuxt-netlify#headers
const netlify = {
  headers: {
    '/*': [
      `Feature-Policy: accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none';  picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none';`,
      'Referrer-Policy: no-referrer',
      'X-Content-Type-Options: nosniff',
      'X-Frame-Options: DENY',
      'X-XSS-Protection: 1; mode=block',
    ],
    '/favicon.ico': [
      'Cache-Control:  public, max-age=31536000, immutable'
    ]
  }
}

export default netlify
