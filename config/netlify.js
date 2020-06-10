// https://github.com/aceforth/nuxt-netlify#headers
const netlify = {
  headers: {
    '/*': [
      `Content-Security-Policy:
        default-src 'none';
        base-uri 'self';
        connect-src 'self';
        form-action 'self';
        img-src 'self';
        script-src 'unsafe-eval' 'unsafe-inline' 'self' https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/;
        style-src 'self';
        require-trusted-types-for 'script';
      `,
      `Feature-Policy:
        accelerometer 'none';
        ambient-light-sensor 'none';
        autoplay 'none';
        camera 'none';
        encrypted-media 'none';
        fullscreen 'self';
        geolocation 'none';
        gyroscope 'none';
        magnetometer 'none';
        microphone 'none';
        midi 'none';
        payment 'none';
        picture-in-picture 'none';
        speaker 'none';
        sync-xhr 'none';
        usb 'none';
        vr 'none';
      `,
      `Referrer-Policy:
        no-referrer;
      `,
      `X-Content-Type-Options:
        nosniff;
      `,
      `X-Frame-Options:
        DENY;
      `,
      `X-XSS-Protection:
        1;
        mode=block;
      `,
    ],
    '/favicon.ico': [
      `Cache-Control:
        immutable,
        max-age=31536000,
        public,
      `
    ]
  }
}

export default netlify
