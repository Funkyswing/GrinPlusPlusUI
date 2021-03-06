import React, { useCallback } from "react";
import { useStoreActions, useStoreState } from "../../hooks";
import { useTranslation } from "react-i18next";
import { Popover, Button, Menu, MenuItem } from "@blueprintjs/core";

export const LanguageMenuContainer = () => {
  const { i18n } = useTranslation();

  const { language } = useStoreState((actions) => actions.idiom);
  const { setLanguage } = useStoreActions((actions) => actions.idiom);

  const changeLanguage = useCallback(
    (lng: "ch" | "de" | "en" | "es" | "pr" | "ru" | "tr") => {
      i18n.changeLanguage(lng);
      setLanguage(lng);
    },
    [i18n, setLanguage]
  );

  return (
    <Popover
      content={
        <Menu>
          <MenuItem
            icon={language === "en" ? "tick" : undefined}
            text="English"
            onClick={() => changeLanguage("en")}
          />
          <MenuItem
            icon={language === "de" ? "tick" : undefined}
            text="Deutsch"
            onClick={() => changeLanguage("de")}
          />
          <MenuItem
            icon={language === "ru" ? "tick" : undefined}
            text="Pусский"
            onClick={() => changeLanguage("ru")}
          />
          <MenuItem
            icon={language === "pr" ? "tick" : undefined}
            text="Português"
            onClick={() => changeLanguage("pr")}
          />
          <MenuItem
            icon={language === "es" ? "tick" : undefined}
            text="Español"
            onClick={() => changeLanguage("es")}
          />
          <MenuItem
            icon={language === "tr" ? "tick" : undefined}
            text="Türkçe"
            onClick={() => changeLanguage("tr")}
          />
        </Menu>
      }
    >
      <Button icon="translate" minimal={true} large={true} />
    </Popover>
  );
};
