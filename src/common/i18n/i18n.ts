import 'intl-pluralrules';

import { Platform, NativeModules } from 'react-native';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import en from 'common/i18n/languages/en';
import tr from 'common/i18n/languages/tr';

const LANGUAGES = {
  en: { translation: en },
  tr: { translation: tr },
};
export type Language = keyof typeof LANGUAGES;
const DEFAULT_LANGUAGE: Language = 'en';

const lng = (
  Platform.OS === 'ios' // Add null check before slice to https://github.com/facebook/react-native/issues/26540#issuecomment-535720033
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages?.[0] ||
      DEFAULT_LANGUAGE
    : NativeModules.I18nManager.localeIdentifier || DEFAULT_LANGUAGE
).slice(0, 2);

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
