import { BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

export default function Post(){

    return(
        <div className="bg-white p-2" >
            <div className="flex items-center  space-x-5">
                <img className="w-10 rounded-full" src="https://hips.hearstapps.com/hmg-prod/images/best-sunscreen-for-face-65ca1fc577210.jpg?crop=1.00xw:0.874xh;0,0&resize=1200:*" alt="" srcset="" />
                <h2 className="text-sm w-10/12">Youssef jr</h2>
                <button className="">
                    <HiDotsVertical size={20} />
                </button>
            </div>
            <div>
                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque sunt, temporibus quibusdam aperiam vel vitae nesciunt ratione. Quia error provident modi repellendus iusto voluptatum delectus voluptatem possimus quae unde?</p>
                <img src="https://i.natgeofe.com/n/726708f7-f79d-47a5-ba03-711449823607/01-balance-of-nature_3x2.jpg?w=718&h=479" alt="" />
            </div>
            <div className="flex items-center py-2">
                <BiSolidLike color="blue"  size={20} className="mx-1" />
                <FaHeart color="red" size={20} className="mx-1" />
                <h4 className="w-4/12 ml-2">People like it</h4>
                <button className="w-8/12 text-right text-sm  font-semibold">Comments</button>
            </div>
        </div>
    )
}