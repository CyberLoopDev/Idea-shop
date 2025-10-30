import './Restore.css'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const Restore = () => {
    return (
        <div className="container">
            <div className="restore-block">
                <Breadcrumb/>
            
            <h2 className="restore-title">Вход в кабинет покупателя</h2>

            <form className="restore-form">
            

                <div className="form-group">
                    <label htmlFor="password" className="restore-label">
                        Email <span className="required-star">*</span>
                    </label>
                    <input 
                        type="password"
                        id="password" 
                        className="restore-input" 
                        required 
                    />
                </div>
            
                <div className="restore-links-block">
                    <NavLink to="/profile" className="restore-link-btn-login">Восстановить пароль</NavLink> 
                    
                    <NavLink to="/profile" className="restore-link-text">Я вспомнил(-а) пароль!</NavLink>
                   
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default Restore