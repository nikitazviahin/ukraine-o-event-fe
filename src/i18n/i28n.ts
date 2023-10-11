import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { languages } from "./resources";

i18n.use(LanguageDetector).init({
  resources: {
    en: languages.en,
    ua: languages.ua,
  },
  fallbackLng: "ua",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  // keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },
});

export default i18n;
