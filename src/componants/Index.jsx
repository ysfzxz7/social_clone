
import RightSide from './right/RightSide'
import SideBar from './leftSide/SideBar'
import { Outlet} from 'react-router-dom'


export default function Index(){

    return(
        <>
        <div className='bg-gray-100 flex flex-row items-start justify-center p-2 mt-2 space-x-2 m-auto w-10/12 ' >
          <SideBar />
          <div className=' md:w-8/12 lg:w-7/12 space-y-2 '>
            <Outlet />            
          </div>
          <RightSide />
      </div>
        </>
    )
}