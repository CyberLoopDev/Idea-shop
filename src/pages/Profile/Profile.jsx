import './Profile.css'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { GoogleLogin } from '@react-oauth/google'

const Profile = () => {
    return (
        <div className="container">
              
            <div className="profile-block">
                <Breadcrumb/>
            
            <h2 className="profile-title">Вход в кабинет покупателя</h2>

            <form className="profile-form">
                <div className="form-group">
                    <label htmlFor="phoneOrEmail" className="profile-label">
                        Телефон или Gmail <span className="required-star">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="phoneOrEmail" 
                        className="profile-input" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="profile-label">
                        Пароль <span className="required-star">*</span>
                    </label>
                    <input 
                        type="password"
                        id="password" 
                        className="profile-input" 
                        required 
                    />
                </div>
            
                <div className="profile-links-block">
                    <NavLink to="/" className="profile-link-btn-login">Войти</NavLink> 
                    
                    <NavLink to="/restore" className="profile-link-text">Восстановить пароль</NavLink>
                    <NavLink to="/registration" className="profile-link-text">Зарегистрироваться</NavLink>
                </div>
            </form>
            <div className="google-login-block">
                <GoogleLogin 
                onSuccess={(credentialResponse) => {
                    console.log('Google login success: ', credentialResponse);
                    
                }}
                onError={() => {
                    console.log('Google login failed');
                    
                }} 
                 theme="filled_blue"   
                 size="large"       
                 shape="rectagular"     
                 width="280" />
            </div>
            </div>
            
        </div>
    )
}

export default Profile