import { Config } from './config';

export const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return process.env.NEXT_PUBLIC_APP_URL;
    }

    return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
    if (locale === Config.defaultLocale) {
        return url;
    }

    return `/${locale}${url}`;
};