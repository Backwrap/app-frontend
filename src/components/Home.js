import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='backwrap'>
                <div className='d-flex justify-content-end py-3 px-2 pb-5'>
                    {/* <button className='btn btn-success mx-3 btn-sm mt-0'>Login Here</button> */}
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
                <p className='text-center mt-5 pt-5 mb-0 text-white display-1 backwrap-title'>Backwrap</p>
                <p className='text-center text-white my-0 backwrap-subtitle display-5'>Endless endpoints</p>
                <div className='d-flex justify-content-center my-4'>
                    <button className='px-4 btn btn-lg rounded-pill mx-2 btn-warning font-weight-bold'><i className='fa fa-rocket'></i> Get Started</button>
                    <a href='https://github.com/Backwrap/backwrap' target='_blank' rel='noreferrer' className='px-4 btn btn-lg rounded-pill mx-2 btn-outline-light font-weight-bold'><i className='fa fa-github fa-lg text-warning'></i> GitHub</a>
                </div>
                <p className='text-white h6 detail-text px-2'>&copy; 2022 | Backwrap Team</p>
            </div>
        </div>
    );
};

export default Home;