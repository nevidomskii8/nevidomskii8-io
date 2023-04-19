import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.translation.json';
import ua from './locales/ua.translation.json';

export const defaultNS = 'ns';
export const resources = {
    en: {
        ns: en,
    },
    ua: {
        ns: ua,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources,
    defaultNS,
});

export default i18n;
