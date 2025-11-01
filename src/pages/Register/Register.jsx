import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './Register.css'
import { GoogleLogin } from '@react-oauth/google'

const Registration = () => {
    return (
        <div className="container">
            <div className="registration-block">
                <Breadcrumb/>
            
            <h2 className="registration-title">Регистрация</h2>

            <form className="registration-form">
                <div className="form-group">
                    <label htmlFor="phoneOrEmail" className="registration-label">
                        Контактное лицо (ФИО) <span className="required-star">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="phoneOrEmail" 
                        className="registration-input" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="registration-label">
                        Контактный телефон <span className="required-star">*</span>
                    </label>
                    <input 
                        type="number"
                        id="password" 
                        className="registration-input" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="registration-label">
                        Gmail <span className="required-star">*</span>
                    </label>
                    <input 
                        type="text"
                        id="password" 
                        className="registration-input" 
                        required 
                    />
                </div>
            
                <div className="form-group">
                    <label htmlFor="password" className="registration-label">
                        Пароль <span className="required-star">*</span>
                    </label>
                    <input 
                        type="password"
                        id="password" 
                        className="registration-input" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="registration-label">
                        Повторите пароль <span className="required-star">*</span>
                    </label>
                    <input 
                        type="password"
                        id="password" 
                        className="registration-input" 
                        required 
                    />
                </div>


                <div className="registration-links-block">
                    <NavLink to="/" className="registration-link-btn-login">Зарегитрироваться</NavLink> 
                    
                    <NavLink to="/profile" className="registration-link-text">У меня уже есть аккаунт</NavLink>
                    
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

export default Registration