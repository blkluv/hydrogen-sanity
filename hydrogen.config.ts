import {CookieSessionStorage, defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    privateStorefrontToken:
      // @ts-ignore
      Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STORE_DOMAIN || 'hahzcandy.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      '67d3ddf6baff758b3ffad350488de1d0',
    storefrontApiVersion: '2022-07',
    // @ts-ignore
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
