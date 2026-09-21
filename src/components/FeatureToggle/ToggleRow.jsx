import "./ToggleRow.css";

export default function ToggleRow({ name, desc, enabled, onChange, badgeId }) {
  return (
    <tr>
      <td><strong>{name}</strong></td>
      <td>{desc}</td>
      <td>
        <span id={badgeId} className={`badge ${enabled ? "b-success" : "b-danger"}`}>
          {enabled ? "Enabled" : "Disabled"}
        </span>
      </td>
      <td>
        <label className="switch">
          <input type="checkbox" checked={enabled} onChange={(e)=>onChange(e.target.checked)} />
          <span className="slider"></span>
        </label>
      </td>
    </tr>
  );
}
