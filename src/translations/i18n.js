import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import hi from './hi.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  es,
  hi,
};

export default I18n;
