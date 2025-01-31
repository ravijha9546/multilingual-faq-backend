const FAQ = require('../models/FAQ');
const { autoTranslate } = require('../services/translationService');
const { getCache, setCache } = require('../services/cacheService');

exports.createFAQ = async (req, res) => {
  try {
    let faq = new FAQ({
      question: { text: req.body.question },
      answer: { text: req.body.answer }
    });

    faq = await autoTranslate(faq);
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || 'en';
    const cacheKey = `faqs:${lang}`;

    const cachedData = await getCache(cacheKey);
    if (cachedData) return res.json(cachedData);

    const faqs = await FAQ.find();
    
    const translatedFAQs = faqs.map(faq => ({
      question: faq.question.translations[lang] || faq.question.text,
      answer: faq.answer.translations[lang] || faq.answer.text
    }));

    setCache(cacheKey, translatedFAQs);

    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};