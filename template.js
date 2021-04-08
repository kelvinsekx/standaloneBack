const template= () => {
    return `<!doctype html>
      <html lang='en'>
        <head>
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' ">
          <meta charset='utf-8'>
          <title>MERN Skeleton</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js" ></script>
        </body>
      </html>`
}

export default template
