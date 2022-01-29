import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../Modals.css';
import axios from 'axios';

export default function Signup({show, setShow}) {

    return (
        <>
            <Modal
                show={show}
                // onHide={handleClose}
                centered
            >
                <Modal.Body
                    className='modalBody p-5'
                >
                    <span className="modalHeading mb-5">Success</span>
                    <span>Your Order has been booked successfully!</span>
                    <span style={{display:'block'}}>Please use reference id: 1921D12</span>
                    <br/>
                    <br/>
                    <br/>
                    <Button className=" mx-auto mySubmitButton" onClick={()=>{setShow(false)}} type="submit">
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}
