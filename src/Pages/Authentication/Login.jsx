
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Auth from "../../Hooks/Auth";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/Auth";

const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const {signInGoogle,login}=useAuth()
    const from = location?.state || '/'
    const [eye,setEye]=useState(true)
  // const {signIn,signInGoogle}=useAuth()
  console.log(import.meta.env.VITE_apiKey)
  console.log(from)
      const handleUserData = (e) => {
  
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email,password).then(()=>{toast.success("Login success")
               navigate(from)
        })
        .catch(error=>{ toast.error(error.message)
         });
         
          
        
      }
      const handleGoogleLogIn=async()=>{
        await signInGoogle().
        then(()=>{
         toast.success("Login success")
         navigate('/findandadd')
        })
         
        .catch(error=>{
             toast.error(error.message)
        })
          }
        
    // const [eye,setEye]=useState(true)
    return (
            <div className="hero bg-base-200 items-center min-h-screen">
            {/* <Helmet>
         <title>Login | Dream Nest Real Estate</title>
          </Helmet> */}
         <div className="hero-content flex w-11/12 justify-center items-center flex-col ">
           <div className="text-center ">
             <h1 className="text-5xl font-bold mb-8">Login now!</h1>
                  {/* <img src={login} alt="" /> */}
           </div>
           <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
             <form  onSubmit={handleUserData} className="card-body xl:pt-10">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
               </div>
               <div className="form-control relative">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type={`${eye ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                 <div onClick={() => setEye(!eye)} className="absolute right-4 top-12">{
                 eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
               }</div>
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary">Login</button>
               </div>
             </form>
             <div className="divider divider-warning">OR</div>
             <div className="flex justify-center">
                     <div onClick={handleGoogleLogIn} className="bg-blue-500 btn my-4 w-2/3 mx-auto">LogIn With Google</div>
             </div>
             <p className="text-center my-3 ">Are you New? please<Link to={'/register'} className="text-blue-700"> Sign Up </Link></p>
    
           </div>
         </div>
     
    </div>
        );
};

export default Login;