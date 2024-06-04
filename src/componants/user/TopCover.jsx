export default function TopCover({data}){
    const {bio, cover, name, avatar} = data
  

    return (
        <div className="flex flex-col justify-center relative">
            <img className="object-contain" src={cover} alt="" />
            <div className=" flex items-center justify-center  w-12/12  md:absolute md:bottom-[-30%]  " >
            <img  className="w-20 h-20 object-cover rounded-full " src={avatar} alt="" />
            <div className="ml-5">
            <h1 className="text-xl font-bold">{name}</h1>
            <h1 className="text-xs">{bio}</h1>
            </div>
            </div>
        </div>
    )
}