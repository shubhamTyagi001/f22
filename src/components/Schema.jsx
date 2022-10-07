import * as Yup from 'yup'

export const LoginSchema  = Yup.object({
    Email:Yup.string().Email().required('please enter email'),
    Password: Yup.string().min(6).required("please enter password"),
    Company: Yup.string().min(6).max(30).required("please enter company"),
})