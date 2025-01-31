import translate from '@vitalets/google-translate-api';

export const translateText = async (text, targetLang) => {
  try {
    const { text: translatedText } = await translate(text, { to: targetLang });
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original
  }
};

export const autoTranslate = async (faq) => {
  const languages = ['en','hi', 'bn'];
  
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