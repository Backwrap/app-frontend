import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const Register = () => {
    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values)=>{
            let errors = {}
            if(values.confirmPassword !== values.password){
                errors.confirmPassword = 'Password not match'
            }
            return errors
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required').email('Invalid Email Address'),
            password: Yup.string().required('Required').matches(),
            confirmPassword: Yup.string().required('Required')
        }),
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return (
        <div>
            <form className='py-3 px-4' onSubmit={formik.handleSubmit} >
                {
                    error !== ''
                    &&
                    <div className='alert alert-danger'>
                        <span><strong><i className='fa fa-exclamation-triangle'></i></strong> {error} </span>
                    </div>
                }
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='First Name' className='form-control' name='firstName' />
                        {formik.touched.firstName && <div className='text-danger'>{formik.errors.firstName}</div> }
                    </div>
                    <div className='form-group col-md-6'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Last Name' className='form-control' name='lastName' />
                        {formik.touched.lastName && <div className='text-danger'>{formik.errors.lastName}</div> }
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email' className='form-control' name='email' />
                        {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div> }
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Password' type='password' className='form-control' name='password' />
                        {formik.touched.password && <div className='text-danger'>{formik.errors.password}</div> }
                    </div>
                    <div className='form-group col-md-6'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Confirm Password' type='password' className='form-control' name='confirmPassword' />
                        {formik.touched.confirmPassword && <div className='text-danger'>{formik.errors.confirmPassword}</div> }
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