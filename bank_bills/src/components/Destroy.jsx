export default function Delete({ deleteData, setDeleteData, setDestroyData }) {
  if (null === deleteData) {
    return null;
  }
  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              onClick={(_) => setDeleteData(null)}
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={(_) => setDeleteData(null)}
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
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
