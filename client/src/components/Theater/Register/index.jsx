import React,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import {ToastContainer , toast} from 'react-toastify'
// import './index.css'
import axios from '../../../axios/axios'


function Index() {
    const navigate = useNavigate()
    const [values, setvalues] = useState({
        name:"",
        email:"",
        passwrod:"",
    })

    const generateError = (err) =>toast.error(err,{position:"bottom-right"})

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const {data}= await axios.post("http://localhost:3001/theater/reg",{
                ...values,
            },{
                withCredentials:true,
            })
            if (data) {
                if (data.errors) {
                  const { email, password } = data.errors;
                  if (email) generateError(email);
                  else if (password) generateError(password);
                } else {
                  navigate("/theater/login");
                }
              }
        }catch(err) {
            console.log(err.message);
        }
    }
  return (
    <div>
        <div className="container">
            <h2>Register account</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Name'                 onChange={(e) =>
                  setvalues({ ...values, [e.target.name]: e.target.value })
                }/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Email'                 onChange={(e) =>
                  setvalues({ ...values, [e.target.name]: e.target.value })
                }/>
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name='password' placeholder='Password'                 onChange={(e) =>
                  setvalues({ ...values, [e.target.name]: e.target.value })
                }/>
                </div>
                <button type='submit'>Submit</button>
                <span>
                    Already have an account ? <Link to='/theater/login' >Login</Link>
                </span>
            </form>
        </div>
            <ToastContainer />
    </div>
  )
}

export default Index