import "./AppBar.css";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LangContext";

export default function AppBar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, dict } = useLang();

  return (
    <header className="appbar">
      <div className="brand">
        <div className="logo">
          <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1" }}>
            account_balance
          </span>
        </div>
        <div>
          <h1>{dict.deptTitle}</h1>
          <p>{dict.adminPanel}</p>
        </div>
      </div>

      <div className="appbar-actions">
        <div className="lang-switch" role="tablist" aria-label="Language">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>English</button>
          <button className={lang === "te" ? "active" : ""} onClick={() => setLang("te")}>తెలుగు</button>
        </div>

        <select
          className="select"
          title="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Theme: White & Blue (Default)</option>
          <option value="teal">Theme: Teal Neon (Dark)</option>
          <option value="purple">Theme: Purple Neon (Dark)</option>
        </select>

        <div className="chip">
          <span className="material-symbols-rounded" style={{ verticalAlign: "-4px" }}>shield_person</span>
          <span>Admin:</span>&nbsp;<strong>Rajesh Kumar</strong>
        </div>

        <button className="btn btn-primary">
          <span className="material-symbols-rounded">&nbsp;<span>Logout</span></span>
        </button>
      </div>
    </header>
  );
}
