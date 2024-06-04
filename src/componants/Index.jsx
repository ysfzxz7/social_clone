
import RightSide from './right/RightSide'
import SideBar from './leftSide/SideBar'
import { Outlet} from 'react-router-dom'


export default function Index(){

    return(
        <>
        <div className='bg-gray-100 flex flex-row items-start justify-center p-5 space-x-2 ' >
          <SideBar />
          <div className='w-7/12 space-y-2 '>
            <Outlet />            
          </div>
          <RightSide />
      </div>
        </>
    )
}