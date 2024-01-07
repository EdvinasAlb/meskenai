export default function Delete({ deleteData, setDeleteData, setDestroyData }) {
  if (null === deleteData) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={(_) => setDeleteData(null)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(_) => setDeleteData(null)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(_) => setDestroyData(deleteData)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
