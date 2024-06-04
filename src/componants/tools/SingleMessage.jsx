import { FaVideo } from "react-icons/fa"
import { HiDotsVertical } from "react-icons/hi"
import { IoCall } from "react-icons/io5"
import { Link, useLocation, useParams } from "react-router-dom"

export default function SingleMessage(props){
    const data = useParams()

    const getAlign = (a)=>{
       return a == 'left' ? 'justify-start' : 'justify-end'
    }
    const getColor = (a)=>{
        return a == 'left' ? 'bg-gray-100' : 'bg-blue-500'
     }

return (
        <div className="">
            <div className="p-3 bg-blue-100 flex justify-center items-center">
            <div className="w-8/12">
                <h1 className="text-2xl font-bold ">{data.d}</h1>
                <p className="text-xs text-gray-400">En Ligne</p>
            </div>
            <div className="flex space-x-5 ">
                <IoCall size={25}  className="hover:bg-slate-100"/>
                <FaVideo size={25}   className="hover:bg-slate-100"/>
                <HiDotsVertical  size={25} className="hover:bg-slate-100" />
            </div>
            </div>
            <ul className="space-y-3 px-32 bg-gray-200 py-5 h-[80vh] overflow-x-scroll"> 
                {messagesData.map(conv =>(
                    <li className={`  flex ${getAlign(conv.align)} `}>
                        <h1 className={`${getColor(conv.align)} rounded-lg p-2 w-fit text-sm `}>{conv.content}</h1>
                    </li>
                ))}
               <div className="flex bg-blue-400 items-center justify-center">
                    <input type="text" placeholder="Enter your message " className="w-10/12 h-12" />
                    <button className="bg-blue-500 p-3 w-2/12">Send</button>
            </div>
            </ul>
            
        </div>
    )
}


const messagesData = [
  {
    id: 1,
    content: "Hello!",
    sender: "user",
    align: "right"
  },
  {
    id: 2,
    content: "Hi there!",
    sender: "contact",
    align: "left"
  },
  {
    id: 3,
    content: "How are you?",
    sender: "user",
    align: "right"
  },
  {
    id: 3,
    content: "How are you?",
    sender: "user",
    align: "right"
  },
  {
    id: 4,
    content: "I'm doing well. Thanks!",
    sender: "contact",
    align: "left"
  },
  {
    id: 5,
    content: "What have you been up to?",
    sender: "user",
    align: "right"
  },
  {
    id: 6,
    content: "Just finished a book. It was amazing!",
    sender: "contact",
    align: "left"
  },
  {
    id: 7,
    content: "Oh, which book did you read?",
    sender: "user",
    align: "right"
  },
  {
    id: 8,
    content: "I read 'The Alchemist' by Paulo Coelho.",
    sender: "contact",
    align: "left"
  },
  {
    id: 9,
    content: "That's a great book! I loved the philosophical themes in it.",
    sender: "user",
    align: "right"
  },
  {
    id: 10,
    content: "Absolutely! It's a book that makes you think and reflect.",
    sender: "contact",
    align: "left"
  },
  {
    id: 11,
    content: "By the way, have you watched any good movies lately?",
    sender: "user",
    align: "right"
  },
  {
    id: 12,
    content: "Yes, I watched 'Parasite' recently. It's a masterpiece!",
    sender: "contact",
    align: "left"
  },
  {
    id: 13,
    content: "I've heard a lot of positive reviews about 'Parasite'. I should definitely watch it.",
    sender: "user",
    align: "right"
  },
  {
    id: 14,
    content: "You won't be disappointed. It's a brilliant film.",
    sender: "contact",
    align: "left"
  },
  {
    id: 15,
    content: "Thanks for the recommendation!",
    sender: "user",
    align: "right"
  },
  {
    id: 16,
    content: "You're welcome! Let me know how you like it.",
    sender: "contact",
    align: "left"
  },
  {
    id: 17,
    content: "Sure, I'll definitely share my thoughts after watching it.",
    sender: "user",
    align: "right"
  },
  {
    id: 18,
    content: "Looking forward to it! Enjoy the movie.",
    sender: "contact",
    align: "left"
  },
  {
    id: 19,
    content: "Hey, I finally watched 'Parasite'. It was mind-blowing!",
    sender: "user",
    align: "right"
  },
  {
    id: 20,
    content: "I'm glad you liked it! It deserved all the accolades it received.",
    sender: "contact",
    align: "left"
  },
  // Add more messages as needed
];