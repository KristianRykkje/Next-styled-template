import React from "react";
import * as st from "./HomeComponent.styles";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { ThemeButton } from "../ThemeButton/ThemeButton";

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <st.HomeWrapper>
      <p>put you text here</p>
      <p>{t("welcome_text")}</p>
      <LanguageSelector />
      <ThemeButton />
    </st.HomeWrapper>
  );
}

export default HomeComponent;
