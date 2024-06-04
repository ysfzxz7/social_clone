import { BiSolidEdit } from "react-icons/bi"
import { BsEye, BsSearch, BsThreeDots } from "react-icons/bs"

export default function TopCover({data}){
    const {bio, cover, name, avatar} = data
  

    return (
        <div className="flex flex-col justify-center relative ">
            <img className="object-contain" src={cover} alt="cover" />
                <div className="flex items-center mb-10">
                <img  className="w-20 h-20 ml-5 object-cover rounded-full absolute " src={avatar} alt="picture" />
                    <div className="ml-32">
                        <h1 className="text-xl font-bold">{name}</h1>
                        <h1 className="text-xs">{bio}</h1>
                    </div>
                </div>
                    <div className="flex items-center w-12/12 justify-between border-t-2 p-2">
                        <div className=" flex justify-start">
                            <ul className="flex text-sm gap-3">
                                <li className="cursor-pointer bg-slate-100 hover:bg-gray-300 px-3 py-2 transition-all duration-300">Posts</li>
                                <li  className="cursor-pointer bg-slate-100 hover:bg-gray-300 px-3 py-2 transition-all duration-300">About</li>
                                <li  className="cursor-pointer bg-slate-100 hover:bg-gray-300 px-3 py-2 transition-all duration-300">Friends</li>
                                <li  className="cursor-pointer bg-slate-100 hover:bg-gray-300 px-3 py-2 transition-all duration-300">Photos</li>
                                <li  className="cursor-pointer bg-slate-100 hover:bg-gray-300 px-3 py-2 transition-all duration-300">More</li>
                            </ul>
                        </div>
                        <div className=" flex justify-end">
                            <ul className="flex items-stretch gap-2">
                                <li className="flex items-center bg-gray-200 w-fit px-3 p-2 rounded-sm shadow-sm text-sm gap-2"><BiSolidEdit size={20} /> Edite your profile</li>
                                <li className=" bg-gray-200 w-fit px-3 py-2"><BsEye /></li>
                                <li className=" bg-gray-200 w-fit px-3 py-2"><BsSearch /></li>
                                <li className=" bg-gray-200 w-fit px-3 py-2"><BsThreeDots /></li>
                            </ul>
                        </div>
                    </div>
        </div>
    )
}