import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='px-3 py-4'>
            <div className='form-row'>
                    <div className='form-group col'>
                        <input placeholder='Email' className='form-control' name='email' />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col'>
                        <input placeholder='Password' className='form-control' name='password' />
                    </div>
                </div>
                <button type='submit' className='btn btn-outline-warning btn-block font-weight-bold'>Log in</button>
                <p className='text-center text-muted my-0 py-2'>Or with</p>
                <div className='d-flex justify-content-center flex-md-row flex-column'>
                    <button type='button' className='btn btn-light border font-weight-bold mx-1 px-5'> <i className='fa fa-github fa-lg'></i> GitHub</button>
                    <button type='button' className='btn btn-light border font-weight-bold mx-1 px-5'> <i className='fa fa-google fa-lg'></i> Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;