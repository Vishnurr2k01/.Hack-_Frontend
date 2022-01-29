import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import './Signup.css';
import axios from 'axios';

export default function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const signupHandler = (e) => {
        console.log("Handling Signup");
        e.preventDefault();
        const { name, email, password, confirmPassword } = user;
        if (name && email && password && (password === confirmPassword)) {
            axios.post("https://yummy-api.herokuapp.com/register", user).then(
                res => {
                    alert(res.data.message)
                    console.log(res.data);
                }
            )
        } else {
            if (password !== confirmPassword) {
                alert("both passwords must be same")
            } else {

                alert("All fields are mandatory")
            }

        }
    }

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
                            <Form.Control name="email" value={user.email} onChange={changeHandler} className="modalInputBox" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.username">
                            <Form.Control name="name" value={user.name} onChange={changeHandler} className="modalInputBox" type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.password">
                            <Form.Control name="password" value={user.password} className="modalInputBox" onChange={changeHandler} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.confirmPassword">
                            <Form.Control name="confirmPassword" value={user.confirmPassword} className="modalInputBox" onChange={changeHandler} type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant=" mx-auto submitButton" onClick={signupHandler} onSubmit={signupHandler} type="submit">
                            Submit
                        </Button>
                        <span className="mx-auto my-3 text-center alreadyText">Already a user? <a className="alternateLink">Login</a></span>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
