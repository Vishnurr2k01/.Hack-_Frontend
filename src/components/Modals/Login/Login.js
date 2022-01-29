import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import './Login.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Login({user,setUser}) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [localUser, setLocalUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setLocalUser({
            ...localUser,
            [name]: value
        })
    }

    function loginHandler(e)  {
        console.log("Login Handler")
        e.preventDefault();
        const { email, password } = localUser;
        axios.post("https://yummy-api.herokuapp.com/login", {name:email,password:password})
        .then(
            res => {
                console.log(res.data);
                if(res.status == 200 && res.data.status==='ok')
                {
                    console.log("Modal Logged in");
                    setUser(res.data.user);
                    const { name, email, password ,_id} = res.data.user;
                    setCookie('name',name);
                    setCookie('email',email);
                    setCookie('password',password);
                    setCookie('_id',_id);
                    setShow(false);
                }
                else
                {
                    console.log("Invalid Login");
                    setUser(null);
                    removeCookie('name');
                    removeCookie('email');
                    removeCookie('_id');
                    removeCookie('password');
                    setShow(false);
                }
            }
        ).catch(e=>{console.log(e)});
        // axios.post("http://localhost:4000/login", user).then(
        //     res => {
        //         alert(res.data.message)
        //         console.log(res.data.user);
        //         navigate('/home')
        //     }
        // )
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
                    <Form  onSubmit={loginHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.email">
                            <Form.Control name="email" value={localUser.email} onChange={handleChange} className="modalInputBox" type="text" placeholder="Email or Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.password">
                            <Form.Control name="password" value={localUser.password} onChange={handleChange} className="modalInputBox" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className=" mx-auto mySubmitButton" type="submit" onClick={loginHandler}>
                            Submit
                        </Button>
                        <span className="mx-auto my-3 text-center alreadyText">Already a user? <a className="alternateLink">Signup</a></span>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
