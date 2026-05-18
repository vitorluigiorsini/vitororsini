import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { languages } from '../constants/languages';
import { useAppLanguageContext } from '../contexts';

const Contact = () => {
  const { languageOption } = useAppLanguageContext();
  const language = languages[languageOption];

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [sentMessage, setSentMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: 'Vitor Orsini',
          to_email: 'vitorluigiorsini@gmail.com',
          message: form.message,
          reply_to: form.email
        },
        import.meta.env.VITE_EMAILJS_API
      )
      .then(
        () => {
          setLoading(false);
          setSentMessage(language.contactText.sentOk);

          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          setSentMessage(language.contactText.sentError);
        }
      );
  };

  function handleCopiedToClipboard() {
    setCopiedToClipboard(true);
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 5000);
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{language.contactText.title}</p>
        <h3 className={styles.sectionHeadText}>
          {language.contactText.subtitle}
        </h3>
        {!copiedToClipboard ? (
          <>
            <p className="text-white font-medium mt-4 text-center">
              {language.contactText.copyToClipboardText}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  language.contactText.clipboardEmail
                );
                handleCopiedToClipboard();
              }}
              className="flex mx-auto mt-4 bg-secondary text-text-primary hover:bg-secondary/90 py-2 px-4 outline-none w-fit text-sm rounded-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              ✉️
            </button>
          </>
        ) : (
          <p className="text-white font-medium mt-4 text-center">
            {language.contactText.copiedToClipboardText}
          </p>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {language.contactText.name}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={language.contactText.namePlaceholder}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {language.contactText.email}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={language.contactText.emailPlaceholder}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {language.contactText.message}
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={language.contactText.messagePlaceholder}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
          </label>
          <label className="flex justify-center text-sm">{sentMessage}</label>

          <button
            type="submit"
            className="bg-secondary text-text-primary hover:bg-secondary/90 py-3 px-8 outline-none w-fit text-sm font-bold shadow-md shadow-primary rounded-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            disabled={loading}
          >
            {loading ? language.contactText.sending : language.contactText.send}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
