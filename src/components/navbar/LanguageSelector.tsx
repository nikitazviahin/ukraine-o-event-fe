import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

import { languageConst } from "../../constants/localStorage";
import { InterfaceLanguage } from "../../types/enums/language.enum";
import i18n from "../../i18n/i18n";
import { languageSelectorStyle } from "../../styles/languageSelector.style";

const currentLanguage = localStorage.getItem(languageConst);

const LanguageSelector = () => {
  const [language, setLanguage] = useState(
    currentLanguage ? currentLanguage : InterfaceLanguage.UA
  );

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem(languageConst, language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Select sx={languageSelectorStyle} value={language} onChange={handleChange}>
      {Object.values(InterfaceLanguage).map((lang) => {
        return (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default LanguageSelector;
