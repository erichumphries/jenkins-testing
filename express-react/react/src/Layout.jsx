import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'

export default function Layout () {
  const location = useLocation()
  console.log(location.pathname)

  const navigate = useNavigate()

  const actions = {
    onHome: () => {
      navigate('/')
    },
    onNewPost: () => {
      navigate('/newPost')
    }
  }

  return (
    <div>
      <NavBar {...actions}></NavBar>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
