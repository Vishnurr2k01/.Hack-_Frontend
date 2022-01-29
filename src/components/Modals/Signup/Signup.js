import react, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import './Signup.css';

export default function Signup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <span onClick={handleShow}>
          Signup
        </span>
  
        <Modal 
            show={show} 
            onHide={handleClose}
            centered
        >
            <Modal.Body
                className='modalBody p-5'
            >
                <span className="modalHeading mb-5">Sign Up</span>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.email">
                    <Form.Control className="modalInputBox" type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.username">
                    <Form.Control  className="modalInputBox" type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.password">
                    <Form.Control  className="modalInputBox" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.confirmPassword">
                    <Form.Control  className="modalInputBox" type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant=" mx-auto submitButton" type="submit">
                    Submit
                </Button>
                <span className="mx-auto my-3 text-center alreadyText">Already a user? <a className="alternateLink">Login</a></span>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  