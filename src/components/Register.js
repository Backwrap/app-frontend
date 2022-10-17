import React from 'react';

const Register = () => {
    return (
        <div>
            <form className='py-3 px-4' >
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <input placeholder='First Name' className='form-control' name='firstName' />
                    </div>
                    <div className='form-group col-md-6'>
                        <input placeholder='Last Name' className='form-control' name='lastName' />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col'>
                        <input placeholder='Email' className='form-control' name='email' />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <input placeholder='Password' type='password' className='form-control' name='password' />
                    </div>
                    <div className='form-group col-md-6'>
                        <input placeholder='Confirm Password' type='password' className='form-control' name='confirmPassword' />
                    </div>
                </div>
                <p className='text-muted'>By registering, you agree to the processing of your personal data by BackWrap as described in the Privacy Policy.</p>
                <button type='submit' className='btn btn-warning font-weight-bold btn-block'>Register</button>
                <p className='text-center text-muted my-0 py-2'>Or</p>
                <div className='d-flex justify-content-center flex-md-row flex-column'>
                    <button type='button' className='btn btn-light border font-weight-bold mx-1'> <i className='fa fa-github fa-lg'></i> Continue with GitHub</button>
                    <button type='button' className='btn btn-light border font-weight-bold mx-1'> <i className='fa fa-google fa-lg'></i> Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Register;