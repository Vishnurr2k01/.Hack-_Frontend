import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import './Signup.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Signup({user, setUser}) {
    const [cookies, setCookie] = useCookies(['user']);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [localUser, setLocalUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setLocalUser({
            ...localUser,
            [name]: value
        })
    }
    const signupHandler = (e) => {
        e.preventDefault();
        console.log("Handling Signup");
        const { name, email, password, confirmPassword } = localUser;
        if (name && email && password && (password === confirmPassword)) {
            axios.post("https://yummy-api.herokuapp.com/register", localUser).then(
                res => {
                    // alert(res.data)
                    console.log(res.data);
                    if(res.status == 200)
                    {
                        console.log("Signup Success");
                        setUser(res.data);
                        const { name, email, password ,_id} = res.data;
                        setCookie('name',name);
                        setCookie('email',email);
                        setCookie('password',password);
                        setCookie('_id',_id);
                    }
                }
            ).catch(e=>{console.log(e)});
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
                            <Form.Control name="email" value={localUser.email} onChange={changeHandler} className="modalInputBox" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.username">
                            <Form.Control name="name" value={localUser.name} onChange={changeHandler} className="modalInputBox" type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.password">
                            <Form.Control name="password" value={localUser.password} className="modalInputBox" onChange={changeHandler} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.confirmPassword">
                            <Form.Control name="confirmPassword" value={localUser.confirmPassword} className="modalInputBox" onChange={changeHandler} type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button className=" mx-auto mySubmitButton" onClick={signupHandler} onSubmit={signupHandler} type="submit">
                            Submit
                        </Button>
                        <span className="mx-auto my-3 text-center alreadyText">Already a localUser? <a className="alternateLink">Login</a></span>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
