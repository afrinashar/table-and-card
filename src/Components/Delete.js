import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteUser() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Remove profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>are you sure to delete</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteUser;
