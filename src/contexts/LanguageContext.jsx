import {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useState
} from 'react';

const LanguageContext = createContext({});

export const useAppLanguageContext = () => {
  return useContext(LanguageContext);
};

const initialLanguage = sessionStorage.getItem('language') ?? 'pt-br';

export const AppLanguageProvider = ({ children }) => {
  const [languageOption, setLanguageOption] = useState(initialLanguage);

  const toggleLanguage = useCallback(() => {
    console.log(languageOption);
    sessionStorage.clear();
    setLanguageOption((oldLanguageOption) =>
      oldLanguageOption === 'pt-br' ? 'en' : 'pt-br'
    );
    console.log(languageOption);
  }, []);

  const language = useMemo(() => {
    sessionStorage.setItem('language', languageOption);
    if (languageOption === 'pt-br') return 'pt-br';

    return 'en';
  }, [languageOption]);
  console.log(language);

  return (
    <LanguageContext.Provider
      value={{ languageOption: language, toggleLanguage: toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
