import React from "react";
import { useRouter } from "next/router";
import * as st from "./LanguageSelector.styles";

function LanguageSelector() {
  const router = useRouter();
  const { locale, locales } = router;

  const changeLanguage = e => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  return (
    <st.LanguageSelectorCSS>
      <select onChange={changeLanguage} defaultValue={locale}>
        {locales.map(language => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </st.LanguageSelectorCSS>
  );
}

export default LanguageSelector;
