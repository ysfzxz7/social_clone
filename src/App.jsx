import Nav from './componants/Top/Nav'
//import RightSide from './componants/right/RightSide'
//import SideBar from './componants/leftSide/SideBar'
import Middle from './componants/Middlepage/Middle'
import { Route, Routes } from 'react-router-dom'
import Messages from './componants/tools/Messages'
import Videos from './componants/tools/Videos'
import Events from './componants/tools/Events'
import Feeds from './componants/tools/Feeds'
import Jobs from './componants/tools/Jobs'
import Index from './componants/Index'
import User from './componants/user/Profile'
import SingleMessage from './componants/tools/SingleMessage'
import Notifications from './componants/tools/Notifications'
import Sign from './componants/welcome/Sign'
import SignUp from './componants/welcome/SignUp'
import Login from './componants/welcome/Login'


function App() {


  return (
    <>
     <div className=' h-screen overflow-x-visible' style={{fontFamily: 'Reddit Sans'}}>
      <Nav />
        <Routes>
          <Route path='/user' Component={User}/>
          <Route path='/sign' element={<Sign />}>
            <Route path='' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='/' exact element={<Index />}>
            <Route path='' element={<Middle />} />
            <Route path='messages/:d' element={<SingleMessage />} /> 
            <Route path='messages' element={<Messages />} />
            <Route path='videos' element={<Videos/>} />
            <Route path='events' element={<Events/>} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='*' element={<Feeds />} />
          </Route>
        </Routes>
     </div>
    </>
  )
}

export default App
