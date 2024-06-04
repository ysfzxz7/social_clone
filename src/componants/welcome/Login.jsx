import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login(){

  return (
    <>
       <div className="flex flex-col justify-between  h-[80%] w-10/12 m-auto ">
            <div className="flex flex-col items-center justify-center">
            <h1>Welcome Back</h1>
            <p>The faster you fill'up the faster you get there ..</p>
            </div>
            <label htmlFor="Email">Email</label>
            <input className="h-12" type="text" name="Email" placeholder="Enter your Email"/>
            <label htmlFor="Password">Password</label>
            <input className="h-12" type="password" name="Passwoord" placeholder="Enter your password" />
            <div className="flex">
              <div className="w-8/12">
              <input type="checkbox" name="Remember" id="" />
              <label htmlFor="Remeber">Remember Me</label>
              </div>
              <div >
              <Link>Forget password</Link>
              </div>
            </div>
           
            <button className="bg-blue-600 py-2">sign in</button>
            <button className="bg-white py-2 flex items-center justify-center"><FaGoogle className="mr-3 "  />sign in with google</button>
            <h1 className="mt-10">Don't have account : <Link to={'/sign/signup'}>Sign up</Link></h1>
           </div>
    </>
  )
}