import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='UTF-8' />

          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <meta name='description' content='' />

          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='assets/img/favicon.ico'
          />
          <link rel='stylesheet' href='assets/css/fontawesome.min.css' />
          <link rel='stylesheet' href='assets/css/ionicons.min.css' />
          <link rel='stylesheet' href='assets/css/simple-line-icons.css' />
          <link rel='stylesheet' href='assets/css/plugins/jquery-ui.min.css' />
          <link rel='stylesheet' href='assets/css/bootstrap.min.css' />
          <link rel='stylesheet' href='assets/css/plugins/plugins.css' />
          <link rel='stylesheet' href='assets/css/style.min.css' />

          <script src='assets/js/vendor/jquery-3.6.0.min.js'></script>
          <script src='assets/js/vendor/jquery-migrate-3.3.2.min.js'></script>
          <script src='assets/js/vendor/modernizr-3.7.1.min.js'></script>
          <script src='assets/js/plugins/jquery-ui.min.js'></script>
          <script src='assets/js/bootstrap.bundle.min.js'></script>
          <script src='assets/js/plugins/plugins.js'></script>
          <script src='assets/js/plugins/ajax-contact.js'></script>
          <script src='assets/js/main.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
