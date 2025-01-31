
import mongoose from 'mongoose';


const faqSchema = new mongoose.Schema({
  question: {
    text: String,
    translations: {
      en:String,
      hi: String,
      bn: String,
      
    }
  },
  answer: {
    text: String,
    translations: {
      en:String,
      hi: String,
      bn: String,
    }
  },
  createdAt: { type: Date, default: Date.now }
});

const FAQ = mongoose.model('FAQ', faqSchema);
export default FAQ;