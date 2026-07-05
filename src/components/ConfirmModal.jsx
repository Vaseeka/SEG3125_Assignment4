import { Modal, Button } from "react-bootstrap";

export default function ConfirmModal({
  show,
  title = "Wait!",
  message,
  emphasis,
  confirmText = "Yes, I'm sure",
  cancelText = "No, take me back",
  onConfirm,
  onCancel,
}) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Body className="p-4">
        <h5 className="fw-bold text-brand mb-2 text-center">{title}</h5>
        <p className="mb-1 text-start">{message}</p>
        {emphasis && <p className="fw-semibold text-brand mb-3 text-start">{emphasis}</p>}
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Button className="btn-outline-brand" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button className="btn-brand" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
