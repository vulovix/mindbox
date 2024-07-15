import '@main/styles/styles.scss';

import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Config } from '@main/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/images/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/images/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/images/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/images/favicon.ico',
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!Config.locales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale !== 'en') {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }

  return (
    <html lang={props.params.locale}>
      <head>
        <Script
          src="/libs/marked.js"
          strategy="lazyOnload"
        />
        <Script
          src="/libs/prism.js"
          strategy="lazyOnload"
        />
        <link rel="stylesheet" href="/libs/prism.css" />
      </head>
      {/* <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head> */}
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <ClerkProvider
            localization={clerkLocale}
            signInUrl={signInUrl}
            signUpUrl={signUpUrl}
            signInFallbackRedirectUrl={dashboardUrl}
            signUpFallbackRedirectUrl={dashboardUrl}
          >
            {props.children}
          </ClerkProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
