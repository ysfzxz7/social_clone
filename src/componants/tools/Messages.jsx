
import { Link } from "react-router-dom"

export default function Messages(){

    return(
        <>

            <div>
            <h1 className="font-bold  ">Chat :</h1>
                <ul className="space-y-3 w-10/12 m-auto cursor-pointer" >
                  {
                    friendsChat.map((chat)=>(
                      <li key={chat.id} className="bg-white p-3 relative rounded-sm">
                              <Link to={chat.name}  >
                                <div className="flex items-center space-x-2 ">
                                    <img className="w-8 rounded-full" src={chat.picture} alt="" />
                                    <h1>{chat.name}</h1>
                                </div>
                                <p className="p-3 text-sm font-semibold">{chat.lastChat}</p>
                                <p className="text-gray-400 text-sm">{chat.latest_timestamp}</p>
                                {chat.read && <div className="w-5 h-5 bg-red-600 absolute top-[50%] right-5 rounded-full flex items-center justify-center text-white text-sm">{chat.unreadMesseges}</div> }
                          </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

    const friendsChat = [
      {
        "id": 2,
        "name": "Alex",
        "picture": "https://image.ibb.co/cA2oOb/alex_1.jpg",
        "latest_timestamp": "10:00 AM",
        "lastChat":
          "Or maybe not, let me check logistics and call you. Give me sometime"
      },
      {
        "id": 3,
        "name": "Bob",
        "picture": "https://image.ibb.co/gSyTOb/bob_1.jpg",
        "latest_timestamp": "12:30 AM",
        "lastChat": "Alright",
        'read': true,
        'unreadMesseges': 2
      },
      {
        "id": 4,
        "name": "Luke",
        "picture": "https://image.ibb.co/jOzeUG/luke_1.jpg",
        "latest_timestamp": "4:12 PM",
        "lastChat": "I will look into it"
      },
      {
        "id": 5,
        "name": "Bane",
        "picture": "https://image.ibb.co/cBZPww/bane_1.jpg",
        "latest_timestamp": "7:53 PM",
        "lastChat": "Exactly my point!"
      },
      {
        "id": 6,
        "name": "Darth Vader",
        "picture": "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
        "latest_timestamp": "1:09 PM",
        "lastChat": "Not quite the same.",
        'read': true,
        'unreadMesseges': 5
      },
      {
        "id": 7,
        "name": "Zach",
        "picture": "https://image.ibb.co/b4kxGw/zach_1.jpg",
        "latest_timestamp": "Yesterday",
        "lastChat": "I thought that the event was over long ago"
      },
      {
        "id": 8,
        "name": "Katie",
        "picture": "https://image.ibb.co/eLVWbw/katie_1.jpg",
        "latest_timestamp": "Yesterday",
        "lastChat": "nothing"
      },
      {
        "id": 9,
        "name": "Chloe",
        "picture": "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        "latest_timestamp": "Wednesday",
        "lastChat": "sure i'll take it from you"
      },
      {
        "id": 10,
        "name": "Kennith",
        "picture": "https://image.ibb.co/fQKPww/kennith_1.jpg",
        "latest_timestamp": "Wednesday",
        "lastChat": "Take care, bye"
      },
      {
        "id": 11,
        "name": "Tara",
        "picture": "https://image.ibb.co/dM6hib/tara_1.jpg",
        "latest_timestamp": "Monday",
        "lastChat": "Not today"
      },
      {
        "id": 12,
        "name": "Gary",
        "picture": "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        "latest_timestamp": "Sunday",
        "lastChat": "Whatever works for you!"
      },
      {
        "id": 13,
        "name": "Zoey",
        "picture": "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        "latest_timestamp": "8/12/2017",
        "lastChat": "Will get in touch"
      },
      {
        "id": 14,
        "name": "Ash",
        "picture": "https://image.ibb.co/iasYpG/ash_1.jpg",
        "latest_timestamp": "6/12/2017",
        "lastChat": "Ok"
      },
      {
        "id": 15,
        "name": "Zen",
        "picture": "https://image.ibb.co/eeqWbw/zen_1.jpg",
        "latest_timestamp": "19/11/2017",
        "lastChat": "Lol"
      }
    ]