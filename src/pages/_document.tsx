import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          #__next-build-watcher,
          [data-nextjs-dialog-overlay],
          [data-nextjs-dialog],
          #NextJSDevIndicator,
          [data-nextjs-terminal],
          [data-nextjs-terminal-button] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        ` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 