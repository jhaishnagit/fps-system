import { useLang } from "../context/LangContext";

export default function useI18n() {
  const { dict } = useLang();
  return (key) => dict[key] || key;
}
