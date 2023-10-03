const React = require('react');

module.exports = function Layout({children, login}) {
  return (
    <html lang='ru'>
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Card</title>
    </head>
    <body>
      <h1>Test</h1>
      <div>
        {children}
      </div>
    </body>
    </html>
  )
};

