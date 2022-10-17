import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import Register from './Register';

const GetStarted = () => {
    const [key, setKey] = useState('register')
    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="register" title="Register">
                    <Register />
                </Tab>
                <Tab eventKey="login" title="Login">
                    <Login />
                </Tab>
            </Tabs>
        </div>
    );
};

export default GetStarted;