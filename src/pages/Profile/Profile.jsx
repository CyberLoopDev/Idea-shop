import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    
    navigate('/login');
  };

  return (
    <div className='profile'>
      <aside className='navbar'>
        <ul className='list-links'>
          <li className='link'>
            <NavLink to='orders-user'>История заказов</NavLink>
          </li>
          <li className='link'>
            <NavLink to='contacts-data'>Контактные данные</NavLink>
          </li>
          <li className='link' onClick={handleLogout}>Выход</li>
        </ul>
      </aside> 

      <main className='profile-lyt'>
        <Outlet />
      </main>      
    </div>
  );
}

export default Profile;
