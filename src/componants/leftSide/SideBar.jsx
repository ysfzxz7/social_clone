import FindFriends from "./FindFriends";
import Settings  from "./Settings";


export default function SideBar() {
    

    return (
        <div className="space-y-5 bg-white w-2/12 flex flex-col items-center justify-center py-5 ">
            <Settings />
            <div className="border-b-4 w-full"></div> 
            <FindFriends />
        </div>
    )
}
