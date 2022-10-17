import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const Login = () => {
    const api = useSelector(state=>state.url)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit: (values)=>{
            setIsLoading(true)
            console.log(values)
            axios.post(`${api}user/signin`, values).then(res=>{
                setIsLoading(false)
                console.log(res.data)
            }).catch(err=>{
                setIsLoading(false)
                console.log(err)
                setError(err.response.data.message)
            })
        }
    })
    return (
        <div>
            <form className='px-3 py-4' onSubmit={formik.handleSubmit} >
                {
                    error !== '' && !isLoading
                    &&
                    <div className='alert alert-danger'>
                        <span><strong><i className='fa fa-exclamation-triangle'></i></strong> {error} </span>
                    </div>
                }
            <div className='form-row'>
                    <div className='form-group col'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email' className='form-control' name='email' />
                        {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div> }
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col'>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Password' className='form-control' name='password' />
                        {formik.touched.password && <div className='text-danger'>{formik.errors.password}</div> }
                    </div>
                </div>
                <button type='submit' className={isLoading ? 'btn btn-outline-warning btn-block font-weight-bold disabled' : 'btn btn-outline-warning btn-block font-weight-bold'}>
                    {
                        isLoading ? 'Logging in...' : 'Log in'
                    }
                </button>
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