import { online } from "../right/Online"
export default function YourFriend() {

  return (
    <div className="bg-white p-5 space-y-3">
      <div className="flex justify-between items-center"> 
      <h1>Friends <span className="font-bold text-gray-400 text-xs">1325</span></h1>
      <h1 className="text-xs">See all friends</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {online.map((friend) => (
          <li>
            <img className="rounded-sm w-20 h-24 object-cover hover:object-left-top transition-all duration-500 shadow-md" src={friend.img} alt="" />
            <h1 className="text-xs">{friend.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}