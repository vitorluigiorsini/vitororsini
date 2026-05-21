import {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useState
} from 'react';
import { t, getTranslation } from '../utils/translation';

const LanguageContext = createContext({});

export const useAppLanguageContext = () => {
  return useContext(LanguageContext);
};

const initialLanguage = sessionStorage.getItem('language') ?? 'pt-br';

export const AppLanguageProvider = ({ children }) => {
  const [languageOption, setLanguageOption] = useState(initialLanguage);

  const toggleLanguage = useCallback(() => {
    const newLanguage = languageOption === 'pt-br' ? 'en' : 'pt-br';
    sessionStorage.setItem('language', newLanguage);
    setLanguageOption(newLanguage);
  }, [languageOption]);

  const translate = useCallback(
    (keyPath) => t(keyPath, languageOption),
    [languageOption]
  );

  const translateValue = useCallback(
    (value) => getTranslation(value, languageOption),
    [languageOption]
  );

  const contextValue = useMemo(
    () => ({
      languageOption,
      toggleLanguage,
      t: translate,
      tv: translateValue
    }),
    [languageOption, toggleLanguage, translate, translateValue]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
