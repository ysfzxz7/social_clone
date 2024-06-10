import Birthday from "./Birthday";
import Online from "./Online";

export default function RightSide(){

    return(
        <div className="w-3/12 space-y-5 hidden lg:block" >

            <Birthday />
            <Online />
        </div>
    )
}