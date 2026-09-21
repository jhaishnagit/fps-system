export default function TabButton({ active, onClick, icon, children }) {
  return (
    <button className={active ? "active" : ""} onClick={onClick}>
      <span className="material-symbols-rounded">{icon}</span>
      <span className="label">{children}</span>
    </button>
  );
}
