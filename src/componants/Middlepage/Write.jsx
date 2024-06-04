import { FaLocationArrow, FaTag, FaVideo } from "react-icons/fa"
import { IoIosHappy } from "react-icons/io"

export default function Write(){


    return (
        <div className="bg-white  p-3 space-y-4">
            <div className="flex justify-between items-start" >
                <img className="w-14  rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/best-sunscreen-for-face-65ca1fc577210.jpg?crop=1.00xw:0.874xh;0,0&resize=1200:*" alt="" srcset="" />
                <input className="bg-gray-100 w-10/12 p-2 h-20" placeholder="what's in your mind" type="text" name="" id="" />
            </div>
            <div  className="flex">
                <ul className=" m-auto flex w-10/12 justify-between">
                    {state.map((ele)=>(
                        <li className="flex items-center justify-center space-x-2 hover:bg-slate-100 p-3 cursor-pointer">
                            {ele.icone}
                            <h3>{ele.name}</h3>
                        </li>
                    ))}
                </ul>
                <button className="bg-green-500 px-4 rounded-sm">Post</button>
            </div>
        </div>
    )
}

const state = [
    {
        name : 'Photo or Vedio',
        icone : <FaVideo  color="blue"  />
    },
    {
        name: 'Tag' ,
        icone:<FaTag  color="blue"  />
    },{
        name: 'Location',
        icone: <FaLocationArrow color="blue"   />
    },
    {
        name: 'Feelings',
        icone: <IoIosHappy  color="blue"  />
    }
]