import config from '../config';

const setResponse = (html, state, manifest, metaTags) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const mainVendor = manifest ? manifest['vendors.js'] : '/assets/vendor.js';
  return (`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="${metaTags.description || ''}">
        <meta name="keywords" content="${metaTags.keywords || ''}">
        <meta name="author" content="@FrcGustavo">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="${mainStyles}"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
        <link rel="icon" type="image/ico" href="/favicon.ico">
        <title>${metaTags.title || 'FrcGustavo | Backend Software Developer '}</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)/* .replace(/</g, '\\u003c') */}
          window.__PRELOADED_API__ = '${config.srv.api}'
          window.__DOMAIN__ = '${config.srv.domain}'
        </script>
        <script src="${mainBuild}"></script>
        <script src="${mainVendor}"></script>
    </body>
    </html>
  `);
};

export default setResponse;
