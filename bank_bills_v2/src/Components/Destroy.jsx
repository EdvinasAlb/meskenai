export default function Delete({ deleteData, setDeleteData, setDestroyData }) {
  if (null === deleteData) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body" style={{ height: "200px" }}>
            <span>Are you sure?</span>
            <button
              className="modal--cancel"
              onClick={(_) => setDeleteData(null)}
            >
              Cancel
            </button>
            <button
              className="modal--delete"
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
