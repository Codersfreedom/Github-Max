import { Route,Routes,Navigate } from 'react-router-dom'


import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Explore from './pages/Explore'
import Likes from './pages/Likes'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

// const SignUpPage = lazy(()=> import ("./pages/Signup")  )
// const LoginPage = lazy(()=> import("./pages/Login"))
// const LikesPage = lazy(()=> import("./pages/Likes"))
// const ExplorePage= lazy(()=> import("./pages/Explore"))
// const HomePage = lazy(()=>import("./pages/Home"))

function App() {

	const {authUser,loading} = useAuthContext();

	if(loading) return null

  return (
    <div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={ <Home />} />
					<Route path='/login' element={!authUser ? <Login />: <Navigate to ={"/"}/> }  />
					<Route path='/signup' element={!authUser ? <Signup />: <Navigate to ={"/"} />} />
					<Route path='/explore' element={authUser ?  <Explore />: <Navigate to ={"/login"} /> } />
					<Route path='/likes' element={authUser ?  <Likes />: <Navigate to ={"/login"} />} />
				</Routes>
					<Toaster/>
			</div>
		</div>
  )
}

export default App
