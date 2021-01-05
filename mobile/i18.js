import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const backendUrl = 'url'
const version = '1.0'
i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    react: { 
      useSuspense: false 
    },
    lng: 'en',
    fallbackLng: 'en',
    preload: ['en'],
    keySeparator: false, 
    defaultNS: 'dictionary',
    ns: ['dictionary'],
    backend: {
      loadPath: `${backendUrl}documents/translations/{{lng}}/{{ns}}.${version}.json`,
      crossDomain: true
    }
  })

export default i18n
