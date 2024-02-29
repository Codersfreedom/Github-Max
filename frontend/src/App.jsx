import { Route,Routes } from 'react-router-dom'
import { lazy } from 'react'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Explore from './pages/Explore'
import Likes from './pages/Likes'
import { Toaster } from 'react-hot-toast'

// const SignUpPage = lazy(()=> import ("./pages/Signup")  )
// const LoginPage = lazy(()=> import("./pages/Login"))
// const LikesPage = lazy(()=> import("./pages/Likes"))
// const ExplorePage= lazy(()=> import("./pages/Explore"))
// const HomePage = lazy(()=>import("./pages/Home"))

function App() {


  return (
    <div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/likes' element={<Likes />} />
				</Routes>
					<Toaster/>
			</div>
		</div>
  )
}

export default App
