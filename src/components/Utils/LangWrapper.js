import {createContext, useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../../lang/en/meta.json';
import Russian from '../../lang/ru-ru/meta.json';
import TEMPLATES from '../../lang/texts.js';
import raw from 'raw.macro';


const local = navigator.language.toLocaleLowerCase()
const RUSSIAN_LOCALE = 'ru-ru'
const ENGLISH_LOCALE = 'en'
let lang;
if (local === RUSSIAN_LOCALE)
{
    lang = Russian;
} else {
    lang = English;
}
export const AppStateContext = createContext(null);


const LangWrapper = (props) => {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang);

    function switchLanguage() {
        if (locale === RUSSIAN_LOCALE) {
            setLocale(ENGLISH_LOCALE)
            setMessages(English);
        } else {
            setLocale(RUSSIAN_LOCALE)
            setMessages(Russian)
        }
    }

    function getTextTemplate(templateName){
        const loc = locale || 'en';
        const template = TEMPLATES.TEXTS_FILES[templateName] || ''
        return raw(`../../lang/${loc}/${template}`)
    }

      function getJsTemplateName(templateName){
        const loc = locale || 'en';
        const template = TEMPLATES.JS_FILES[templateName] || ''
        return `lang/${loc}/${template}`;
    }

return (
    <AppStateContext.Provider value={{locale, switchLanguage, getTextTemplate, getJsTemplateName}}>
        <IntlProvider messages={messages} locale={locale}>
            {props.children}
        </IntlProvider>
    </AppStateContext.Provider>
       )
};

export default LangWrapper;
