import { Outlet } from 'react-router-dom'
import './Profile.css'
import { NavLink } from 'react-router-dom'


const Profile = () => {



  return (
    <div className='profile'>
       <aside className='navbar'>
        <ul className='list-links'>
          <li className='link'><NavLink to='orders-user'>История заказов</NavLink></li>
          <li className='link'><NavLink to='contacts-data'>Контактные данные</NavLink></li>
          <li className='link'>Выход</li>
          </ul>
          </aside> 
          

          <main className='profile-lyt'>
            <Outlet /></main>      

    </div>
  )
}

export default Profile
