import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { languageConst } from "../constants/localStorage";
import { InterfaceLanguage } from "../types/enums/language.enum";
import i18n from "../i28n";

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
    <Select
      sx={{
        maxHeight: "2rem",
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      value={language}
      onChange={handleChange}
    >
      <MenuItem value={InterfaceLanguage.UA}>{InterfaceLanguage.UA}</MenuItem>
      <MenuItem value={InterfaceLanguage.EN}>{InterfaceLanguage.EN}</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
