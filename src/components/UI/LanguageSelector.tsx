import { useTranslation } from "react-i18next";
import englishFlag from "/en-flag.png";
import frenchFlag from "/fr-flag.png";
import { RefObject, KeyboardEvent } from "react";

type LanguageSelectorProps = {
  horizontalFocus: (event: KeyboardEvent) => void;
  mouseFocus: (event: MouseEvent) => void;
  navRef: RefObject<HTMLElement>;
};

function LanguageSelector(props: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const changeLanguage = async () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    await i18n.changeLanguage(newLanguage);
  };

  const flagImage = i18n.language === "en" ? (frenchFlag as string) : (englishFlag as string);
  return (
    <div>
      <button
        ref={props.navRef}
        onClick={() => {
          props.mouseFocus();
          void changeLanguage();
        }}
        onKeyDown={props.horizontalFocus}
        tabIndex={0}
        aria-label="Change language"
      >
        <img className="w-8 mt-[1.7rem] mr-[1rem] md:mt-1 p-0" src={flagImage} alt="Flag" />
      </button>
    </div>
  );
}

export default LanguageSelector;
