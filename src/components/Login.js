import React from 'react'
import {useFormik} from 'formik'
import { LoginSchema } from './Schema'
function Login() {

    const initialValues ={
        Email:'',
        Password:'',
        Company:'',
    }
    const {values,errors,handleChange,handleSubmit}=  useFormik({
        initialValues: initialValues,
         validationSchema: LoginSchema,
        onSubmit: (values)=>{
    console.log(values)
        }
    })
    console.log(errors)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="uname">Email</label><br/>
            <input type="text" placeholder="Enter Email" name="Email" value={values.Email} onChange={handleChange} /><br/>
            <p>{errors.Email}</p>
            <label for="psw">Password</label><br/>
            <input type="password" placeholder="Enter Password" name="Password" value={values.Password} onChange={handleChange} /><br/>
           <p>{errors.Password}</p>
            <label for="com">Company</label><br/>
            <input type="text" placeholder="Company" name="Company" value={values.Company} onChange={handleChange}/><br/>
          <p>{errors.Company}</p>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login