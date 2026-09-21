export default function AddUserModal({ onClose, onSubmit }) {
  const handle = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onSubmit({
      name: fd.get("name"),
      role: fd.get("role"),
      zone: fd.get("zone"),
      contact: fd.get("contact"),
      status: fd.get("status"),
    });
    onClose();
  };

  return (
    <div className="modal show" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-head">
          <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>person_add</span><span>Add User</span></div>
          <button className="close" onClick={onClose}><span className="material-symbols-rounded">close</span></button>
        </div>
        <form className="modal-body" onSubmit={handle}>
          <div className="grid grid-2">
            <div className="field">
              <label>Full Name</label>
              <input className="input" name="name" placeholder="e.g., Anitha Rao" required />
            </div>
            <div className="field">
              <label>Role</label>
              <select className="select-inp" name="role">
                <option value="admin">Admin</option>
                <option value="regional">Regional Officer</option>
                <option value="helpdesk">Helpdesk Agent</option>
                <option value="dealer">FPS Dealer</option>
                <option value="partner">Mini Mart Partner</option>
              </select>
            </div>
            <div className="field">
              <label>Zone/Shop</label>
              <input className="input" name="zone" placeholder="e.g., Guntur District / Shop #12" />
            </div>
            <div className="field">
              <label>Contact</label>
              <input className="input" name="contact" placeholder="98765 43210" />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select-inp" name="status">
                <option>Active</option><option>Pending</option><option>Suspended</option>
              </select>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginTop:12, justifyContent:"flex-end"}}>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} type="submit">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
