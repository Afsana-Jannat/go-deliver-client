import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <select
            className="border px-2 py-1 rounded"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
        </select>
    );
};

export default LanguageSwitcher;
