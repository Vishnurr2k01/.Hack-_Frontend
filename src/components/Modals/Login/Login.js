import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import './Login.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Signup() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
    }

    const loginHandler = () => {
        const { email, password } = user;
        axios.post("http://localhost:4000/login", user).then(
            res => {
                alert(res.data.message)
                console.log(res.data.user);
                navigate('/home')
            }
        )
    }
    return (
        <>
            <span onClick={handleShow}>
                Login
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Body
                    className='modalBody p-5'
                >
                    <span className="modalHeading mb-5">Login</span>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.email">
                            <Form.Control name="email" value={user.email} onChange={handleChange} className="modalInputBox" type="text" placeholder="Email or Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.password">
                            <Form.Control name="password" value={user.password} onChange={handleChange} className="modalInputBox" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className=" mx-auto mySubmitButton" type="submit">
                            Submit
                        </Button>
                        <span className="mx-auto my-3 text-center alreadyText">Already a user? <a className="alternateLink">Signup</a></span>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
