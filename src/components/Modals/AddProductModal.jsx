export default function AddProductModal({ onClose, onSubmit }) {
  const handle = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onSubmit({
      name: fd.get("name"),
      unit: fd.get("unit"),
      tax: Number(fd.get("tax") || 0),
      pds: fd.get("pds"),
      status: fd.get("status"),
    });
    onClose();
  };

  return (
    <div className="modal show" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-head">
          <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>inventory_2</span><span>Add Product</span></div>
          <button className="close" onClick={onClose}><span className="material-symbols-rounded">close</span></button>
        </div>
        <form className="modal-body" onSubmit={handle}>
          <div className="grid grid-2">
            <div className="field">
              <label>Category Name</label>
              <input className="input" name="name" placeholder="Rice (బియ్యం)" required />
            </div>
            <div className="field">
              <label>Unit</label>
              <select className="select-inp" name="unit">
                <option>Kg</option><option>Litre</option><option>Pack</option>
              </select>
            </div>
            <div className="field">
              <label>Tax Code (%)</label>
              <input className="input" name="tax" type="number" min="0" max="28" defaultValue="0" />
            </div>
            <div className="field">
              <label>PDS Eligible</label>
              <select className="select-inp" name="pds"><option>Yes</option><option>No</option></select>
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select-inp" name="status"><option>Active</option><option>Inactive</option></select>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginTop:12, justifyContent:"flex-end"}}>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
