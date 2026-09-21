export default function AddContentModal({ onClose, onSubmit }) {
  const handle = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onSubmit({
      title: fd.get("title"),
      type: fd.get("type"),
      status: fd.get("status"),
      body: fd.get("body"),
      created: new Date().toISOString().slice(0,10),
    });
    onClose();
  };

  return (
    <div className="modal show" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-head">
          <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>add_to_photos</span><span>Add Content</span></div>
          <button className="close" onClick={onClose}><span className="material-symbols-rounded">close</span></button>
        </div>
        <form className="modal-body" onSubmit={handle}>
          <div className="grid grid-2">
            <div className="field">
              <label>Title</label>
              <input className="input" name="title" placeholder="e.g., New Ration Delivery Timings" required />
            </div>
            <div className="field">
              <label>Type</label>
              <select className="select-inp" name="type">
                <option value="banner">Banner</option>
                <option value="announcement">Announcement</option>
                <option value="notification">Notification</option>
              </select>
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select-inp" name="status"><option>Active</option><option>Inactive</option></select>
            </div>
            <div className="field" style={{gridColumn:"1/-1"}}>
              <label>Body</label>
              <textarea className="textarea" name="body" rows="4" placeholder="Short description..."></textarea>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginTop:12, justifyContent:"flex-end"}}>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} type="submit">Add Content</button>
          </div>
        </form>
      </div>
    </div>
  );
}
