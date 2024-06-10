import { FaLocationArrow, FaTag, FaVideo } from "react-icons/fa"
import { IoIosHappy } from "react-icons/io"

export default function Write(){


    return (
        <div className="bg-white p-3 space-y-4">
            <div className="flex justify-between items-start gap-2 lg:p-5 " >
                <img className="w-16 rounded-full " src={img} alt="" srcset="" />
                <input className="bg-gray-100 w-10/12 p-2 h-16 text-xs lg:text-sm" placeholder="what's in your mind" type="text" name="" id="" />
            </div>
            <div  className="flex flex-col space-y-2   lg:flex-row lg:items-center lg:justify-center">
                <ul className="flex justify-around  lg:w-10/12 gap-1">
                    {state.map((ele)=>(
                        <li className=" flex  text-xs  cursor-pointer items-center lg:text-sm gap-1">
                            {ele.icone}
                            <h3 className="flex-1  line-clamp-1">{ele.name}</h3>
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

const img = "https://hips.hearstapps.com/hmg-prod/images/best-sunscreen-for-face-65ca1fc577210.jpg?crop=1.00xw:0.874xh;0,0&resize=1200:*"