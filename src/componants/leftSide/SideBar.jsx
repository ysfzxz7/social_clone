import FindFriends from "./FindFriends";
import Settings  from "./Settings";


export default function SideBar() {
    

    return (
        <div className="space-y-5 bg-white lg:w-3/12 md:w-4/12  md:flex flex-col items-center justify-center py-5 hidden  ">
            <Settings />
            <div className="border-b-4 w-full"></div> 
            <FindFriends />
        </div>
    )
}
