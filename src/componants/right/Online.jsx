
export default function(){

    return(
        <div className="bg-white p-3">
            <h1 className="font-semibold text-sm mb-5">Online Friends :</h1>
            <ul className="space-y-5">
               {
                online.map((el,i)=>(
                    <li key={i}  className="flex items-center  space-x-2 relative">
                        <img className="w-10 h-10 object-cover rounded-full" src={el.img} alt="" srcset="" />
                        <h1>{el.name}</h1>
                        <div className=" top-0 left-5 border-white border-2 absolute w-3  h-3 bg-green-500 rounded-full "></div>
                    </li>
                ))
               }
            </ul>
        </div>
    )
}

const online =  [
  {
    name: "John Doe",
    img: "data:image/jpeg;base64,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"
  },
  {
    name: "Jane Smith",
    img: "https://as2.ftcdn.net/v2/jpg/02/32/98/33/1000_F_232983351_z5CAl79bHkm6eMPSoG7FggQfsJLxiZjY.jpg"
  },
  {
    name: "Mike Johnson",
    img: "https://as1.ftcdn.net/v2/jpg/01/16/43/12/1000_F_116431282_WaBDQpBRnTZ2UxhEhUmBASaojfADpQAC.jpg"
  },
  {
    name: "Emily Davis",
    img: "https://as2.ftcdn.net/v2/jpg/01/16/43/13/1000_F_116431300_R87DVugRtFBZ39e2XPphAt3GuJPfGcaY.jpg"
  },
  {
      name: "John Doe",
      img: "https://as2.ftcdn.net/v2/jpg/05/40/73/97/1000_F_540739734_QnWhxSM827H7kYNJEp4bbFOWMgSCDASw.jpg"
    },
    {
      name: "Jane Smith",
      img: "https://as2.ftcdn.net/v2/jpg/02/94/06/51/1000_F_294065184_FAMkqviftQsjHgJ5NIqOvHcZaiqWxNb3.jpg"
    },
    {
      name: "Mike Johnson",
      img: "https://as1.ftcdn.net/v2/jpg/05/46/76/28/1000_F_546762864_gbcWzUQjIQXK2mhFwzyq10t3K6n0a0H0.jpg"
    },
    {
      name: "Emily Davis",
      img: "https://as2.ftcdn.net/v2/jpg/06/03/08/21/1000_F_603082145_cZOjbfu83ryFlbbJGZ9elFxISZKGo9J3.jpg"
    }
]