'use client';

import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@/redux/store'
import { BUTTON, INPUT, POPOVER, TOOLTIP } from '@/components/Generic/Colors'
import Description from '@/components/Home/Description'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta name="keywords" content="UCP, student reviews, teacher feedback, academic reviews, educational platform, university reviews" />
        <meta name="author" content="Student Space" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UCP Faculty Reviews - Share Your Feedback" />
        <meta property="og:description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta property="og:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6V4LcdEcF_lnchtgKlHhEiMETIhUNpDUIHlvwP00GmpO1Mtv6-DtiemTztl65it7Gj0BTnaTiV8Y0U7M4QanN7m5zmHapTQglp1F4_ZADSygVv3xmz0X5uu7WzIilkrKz4eiCXtHK3A16ljQzhbJuEpzlI9fVxCKYkiRYzDc3YRxp4_2IBfSrW-Sbb6k/s192/logo192.png" />
        <meta property="og:url" content="https://www.studentspace.online/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UCP Faculty Reviews - Share Your Feedback" />
        <meta name="twitter:description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta name="twitter:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6V4LcdEcF_lnchtgKlHhEiMETIhUNpDUIHlvwP00GmpO1Mtv6-DtiemTztl65it7Gj0BTnaTiV8Y0U7M4QanN7m5zmHapTQglp1F4_ZADSygVv3xmz0X5uu7WzIilkrKz4eiCXtHK3A16ljQzhbJuEpzlI9fVxCKYkiRYzDc3YRxp4_2IBfSrW-Sbb6k/s192/logo192.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        <title>Student Space | UCP Faculty Reviews</title>
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59YD1DRWFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59YD1DRWFL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1691781600316534"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        
        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/502cbf93d2.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        
        <ConfigProvider
          theme={{
            components: {
              Input: INPUT,
              Popover: POPOVER,
              Tooltip: TOOLTIP,
              Button: BUTTON
            },
          }}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
              <Description />
            </PersistGate>
          </Provider>
        </ConfigProvider>
        
        {/* AOS (Animate On Scroll library) JavaScript */}
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">
          {`AOS.init({ duration: 900 });`}
        </Script>
      </body>
    </html>
  )
}