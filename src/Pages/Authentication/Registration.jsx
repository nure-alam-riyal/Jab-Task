import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { imageURL } from "../../ImageHosting/ImageHost";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/Auth";
import useAxios from "../../Hooks/useAxios";


const Registration = () => {
    const navigate=useNavigate()
    const [eye,setEye]=useState(true)
   const userAxios=useAxios()
    const {createUser,Updateprofile,signInGoogle}=useAuth()
    const handleUser= async e=>{
      e.preventDefault()
      const name=e.target.name.value
      const photo=e.target.photo.files[0]
      const email=e.target.email.value
      const password=e.target.password.value
      const image=await imageURL(photo)
    const  info={userName:name,image,email}
    
    //console.log(info)
    const passA = /(?=.*[A-Z])/
      const passa = /(?=.*[a-z])/
      const pass6 = /.{6,}/
     const special = /(?=.*[@$!%*?&])/
      if (!passA.test(password)) {
        toast.error('Password need one UpperCase Later')
        return
      }
      else if (!passa.test(password)) {
        toast.error('Password need one LowerCase Later')
        return
      }
      else if (!pass6.test(password)) {
        toast.error('Password  need at least 6  character and One Number')
        return
      }
      else if(!special.test(password)){
        toast.error('Password  need one special latter')
        return
      }
      else {
      createUser(email,password).then(
        Updateprofile(name,image).then(async()=>{
        navigate('/')
        console.log(info)
       await userAxios.post('/user',info).then(()=>{
          toast.success("user login")
        
        })
  
        
        }).catch(error=>{
         toast.error(error.message)
          })
      )
      .catch()
     }
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
    
    return (
        <div className="hero bg-base-200 py-10 min-h-screen">
        {/* <Helmet>
     <title>Registration | Dream Nest Real Estate</title>
      </Helmet> */}
     <div className="hero-content flex w-11/12 justify-center items-center  p-0 flex-col ">
       <div className="text-center ">
         <h1 className="text-5xl text-center font-bold">Registeration <br /> Now  </h1>
       {/* <div className="w-full "> <Lottie className="w-full" animationData={rigister}> </Lottie></div> */}
       </div>
       <div className="card bg-base-100 w-full shadow-2xl">
         <form onSubmit={handleUser} className="card-body p-3  w-full">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name"  placeholder="Enter Your Name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Photo</span>
             </label>
            <div> <input type="file" name="photo"  placeholder="Take your Photo" className="input flex w-[320px] border  justify-center border-none input-bordered" required /></div>
           </div>
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
             <button className="btn btn-primary">Sign Up</button>
           </div>
         </form>
         <div className="divider divider-warning">OR</div>
         <div className="flex justify-center">
                 <div onClick={handleGoogleLogIn} className="bg-blue-500 btn my-4 w-2/3 mx-auto">LogIn With Google</div>
         </div>
         <p className="text-center my-3 ">Are already create account ? please<Link to={'/'} className="text-blue-700"> Sign In </Link></p>

       </div>
     </div>
   </div>
    );
};

export default Registration;