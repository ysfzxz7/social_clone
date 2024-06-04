import { FaBell, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Nav(){

    const handleRefrech = ()=>{
        window.location.reload()
    }

    return(
        <>
        <div className="p-1 bg-blue-400 flex items-center justify-around sticky top-0 px-10 z-20 ">
            <h1 onClick={handleRefrech} className="font-extrabold text-2xl w-4/12 text-center cursor-pointer"><Link to={'/'}>Facebook</Link></h1>
            <input className="p-2 w-6/12 " type="text" placeholder="serach for someone"  />
            <div className="flex justify-around w-2/12">
                <h2>Homepage</h2>
                <h2>Timeline</h2>
            </div>
            <div className="w-2/12 justify-around flex">
                <Link to={'/notifications'}>
                <FaBell size={20} color="white"  />
                </Link>
                <Link to={'/messages'} >
                    <MdMessage  size={20} color="white"/>
                </Link>
                <FaUser  size={20} color="white"/>
            </div>
            <Link to={'/user'}><img className="w-10 rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/best-sunscreen-for-face-65ca1fc577210.jpg?crop=1.00xw:0.874xh;0,0&resize=1200:*" alt="" /></Link>
        </div>
        </>
    )
}