import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import GetStarted from './GetStarted';
import Login from './Login';

const Home = () => {
    const [show, setShow] = useState(false)
    const [loginShow, setLoginShow] = useState(false)
    const handleClose = ()=>{
        setShow(false)
        setLoginShow(false)
    }
    const getStarted = ()=>{
        setShow(true)
    }
    const loginHere = ()=>{
        setLoginShow(true)
    }
    return (
        <div>
            <div className='backwrap animate__animated animate__fadeIn animate__slow'>
                <div className='d-flex justify-content-end py-3 px-2 pb-5 animate__animated animate__slideInLeft animate__fast'>
                    <button onClick={loginHere} className='btn btn-outline-warning mx-3 btn-sm mt-0'>Login Here</button>
                    <a href='https://github.com/Backwrap/backwrap'>
                        <i className='fa fa-github fa-lg text-white mx-3'></i>
                    </a>
                    <a href='/'>
                        <i className='fa fa-twitter fa-lg text-white mx-3'></i>
                    </a>
                    <a href='/'>
                        <i className='fa fa-facebook fa-lg text-white mx-3'></i>
                    </a>
                    <a href='/'>
                        <i className='fa fa-google fa-lg text-white mx-3'></i>
                    </a>
                </div>
                <div className='animate__animated animate__fadeInDown animate__slower'>
                    <p className='text-center mt-5 pt-5 mb-0 text-white display-1 backwrap-title'>Backwrap</p>
                    <p className='text-center text-white my-0 backwrap-subtitle display-5'>Endless endpoints</p>
                    <div className='d-flex justify-content-center my-4 flex-md-row flex-column'>
                        <button onClick={getStarted} className='my-2 px-4 btn btn-lg rounded-pill mx-2 btn-warning font-weight-bold'><i className='fa fa-rocket'></i> Get Started</button>
                        <a href='https://github.com/Backwrap/backwrap' target='_blank' rel='noreferrer' className='my-2 px-4 btn btn-lg rounded-pill mx-2 btn-outline-light font-weight-bold'><i className='fa fa-github fa-lg text-warning'></i> GitHub</a>
                    </div>
                </div>
                <p className='text-white h6 detail-text px-2 animate___animated animate__fadeInDown animate__slower'>&copy; 2022 | Backwrap Team</p>
            </div>

            {/* Get Started Modal */}
            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header>
                <Modal.Title>Get Started with BackWrap</Modal.Title>
                <button className='close' onClick={handleClose}>
                    &times;
                </button>
                </Modal.Header>

                <GetStarted />

            </Modal>
            {/* Login Modal */}
            <Modal show={loginShow} onHide={handleClose} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>
                        Log in
                    </Modal.Title>
                    <button className='close' onClick={handleClose}>
                        &times;
                    </button>
                </Modal.Header>

                <Login />

            </Modal>
        </div>
    );
};

export default Home;