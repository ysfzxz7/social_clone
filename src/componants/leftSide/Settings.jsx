import { BsChatDotsFill } from "react-icons/bs";
import { FaBookBookmark } from "react-icons/fa6";
import { MdGroup, MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import {FaCalendarWeek, FaHome, FaQuestionCircle, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Settings(){
    return (
        <>
        <ul className="space-y-5 w-8/12 ">
            <h1 className="text-sm font-semibold text-gray-700 cursor-pointer">Settings</h1>
                {
                    tools.map((el)=>(
                        
                        <li key={el.name} className=" space-x-2">
                          <Link to={el.tag} className="ml-2 flex  justify-start cursor-pointer  ">
                          {el.icon}
                          <p className="ml-2">{el.name}</p>
                          </Link>
                        </li>
                    ))
                }
            </ul>
            <button className="p-2 bg-gray-100 border mt-5 font-semibold text-sm">Show more ..</button>
        </>
    )
}


const tools = [
    {
      name: "Feed",
      tag:'feeds',
      icon: <FaHome size={20}  />
    },
    {
      name: "Chats",
      tag:'messages',
      icon: <BsChatDotsFill size={20}  />
    },
    {
      name: "Videos",
      tag:'videos',
      icon: <FaVideo size={20}  />
    },
    {
      name: "Groups",
      tag:'groups',
      icon: <MdGroup size={20} />
    },
    {
      name: "Bookmarks",
      tag:'bookmarks',
      icon: <FaBookBookmark size={20}  />
    },
    {
      name: "Questions",
      tag:'questions',
      icon: <FaQuestionCircle size={20}  />
    },
    {
      name: "Jobs",
      tag:'jobs',
      icon: <MdWork  size={20} />
    },
    {
      name: "Events",
      tag:'message',
      icon: <FaCalendarWeek  size={20} />
    },
    {
      name: "Courses",
      tag:'message',
      icon: <IoSchool size={20} />
    }
  ];