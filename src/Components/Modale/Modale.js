import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Modale() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose} className='Modal'>
        <Modal.Header closeButton>
          <Modal.Title>Merci de sélectionner le modèle à commander</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Modèle</Form.Label>
              <Form.Select aria-label="Default select example">
      <option>PORTE PAPIER TOILETTE</option>
    
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Quantité</Form.Label>
        <Form.Control type="number" placeholder="1" />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Commander
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modale
