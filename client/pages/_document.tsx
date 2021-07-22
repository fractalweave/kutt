import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import getConfig from "next/config";
import React from "react";

import { Colors } from "../consts";

const { publicRuntimeConfig } = getConfig();

interface Props {
  styleTags: any;
}

class AppDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content={`${publicRuntimeConfig.SITE_NAME}, a free URL shortener`}
          />
          <link rel="preload" href="https://fractalweave.com/font/inter/Inter-roman.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/inter/Inter-italic.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/fraunces/Fraunces--latin_basic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/fraunces/Fraunces-Italic--latin_basic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Bold-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-BoldItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-ExtraLight-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-ExtraLightItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Italic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Light-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-LightItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Medium-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-MediumItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Regular-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-SemiBold-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-SemiBoldItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Text-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-TextItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-Thin-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="https://fractalweave.com/font/plex/IBMPlexMono-ThinItalic-Latin1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link
            href="https://fractalweave.com/font/fonts.css"
            rel="stylesheet"
          />
          <link rel="icon" sizes="196x196" href="/images/favicon-196x196.png" />
          <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/images/favicon-196x196.png" />
          <link rel="mask-icon" href="/images/icon.svg" color="blue" />
          <link rel="manifest" href="manifest.webmanifest" />
          <meta name="theme-color" content="#f3f3f3" />

          <meta property="fb:app_id" content="123456789" />
          <meta
            property="og:url"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={publicRuntimeConfig.SITE_NAME} />
          <meta
            property="og:image"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}/images/card.png`}
          />
          <meta
            property="og:description"
            content="Free & Open Source Modern URL Shortener"
          />
          <meta
            name="twitter:url"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}`}
          />
          <meta name="twitter:title" content={publicRuntimeConfig.SITE_NAME} />
          <meta
            name="twitter:description"
            content="Free & Open Source Modern URL Shortener"
          />
          <meta
            name="twitter:image"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}/images/card.png`}
          />

          {this.props.styleTags}

          <script
            dangerouslySetInnerHTML={{
              __html: `window.recaptchaCallback = function() { window.isCaptchaReady = true; }`
            }}
          />

          <script
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            async
            defer
          />
        </Head>
        <body
          style={{
            margin: 0,
            backgroundColor: Colors.Bg,
            font: '16px/1.45 "IBM Plex Mono", monospace',
            overflowX: "hidden",
            color: Colors.Text
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default AppDocument;
