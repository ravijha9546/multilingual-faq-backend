const translate = require('@vitalets/google-translate-api');

const translateText = async (text, targetLang) => {
  try {
    const { text: translatedText } = await translate(text, { to: targetLang });
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};

const autoTranslate = async (faq) => {
  const languages = ['hi', 'bn'];
  
  for (const lang of languages) {
    if (!faq.question.translations[lang]) {
      faq.question.translations[lang] = await translateText(faq.question.text, lang);
    }
    
    if (!faq.answer.translations[lang]) {
      faq.answer.translations[lang] = await translateText(faq.answer.text, lang);
    }
  }
  
  return faq;
};

module.exports = { translateText, autoTranslate };