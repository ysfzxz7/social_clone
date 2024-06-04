import { Outlet } from "react-router-dom";
import Login from "./Login";

export default function Sign(){
  return (
    <>
      <div className="w-full flex h-[90vh]">
        <div className="flex  bg-blue-300 w-8/12 m-auto ">
          <div className="flex-1 ">
          <div className="h-[20%] p-5">
            <h1 className="font-bold text-3xl">FaceBook</h1>
          </div>
          <Outlet />
           
          </div>
          <div className="flex-1  bg-blue-700 object-fill">
          <img className="w-[100%] h-[100%] object-cover"  src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1.-Gigi-Hadid.jpg.avif" alt="" />
          </div>
        </div>
         
      </div>
    </>
  )
}