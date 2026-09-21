export default function AddZoneModal({ onClose, onSubmit }) {
  const handle = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onSubmit({
      district: fd.get("district"),
      mandal: fd.get("mandal"),
      count: Number(fd.get("count") || 0),
      status: fd.get("status"),
    });
    onClose();
  };

  return (
    <div className="modal show" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-head">
          <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>map</span><span>Add Zone</span></div>
          <button className="close" onClick={onClose}><span className="material-symbols-rounded">close</span></button>
        </div>
        <form className="modal-body" onSubmit={handle}>
          <div className="grid grid-2">
            <div className="field">
              <label>District</label>
              <select className="select-inp" name="district" required>
                <option value="">--</option>
                <option>Guntur</option><option>Krishna</option><option>Visakhapatnam</option><option>Vijayawada</option>
              </select>
            </div>
            <div className="field">
              <label>Mandal</label>
              <input className="input" name="mandal" placeholder="e.g., Tenali" required />
            </div>
            <div className="field">
              <label>FPS Count</label>
              <input type="number" className="input" name="count" min="0" defaultValue="0" required />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select-inp" name="status">
                <option>Active</option><option>Paused</option>
              </select>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginTop:12, justifyContent:"flex-end"}}>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} type="submit">Add Zone</button>
          </div>
        </form>
      </div>
    </div>
  );
}
