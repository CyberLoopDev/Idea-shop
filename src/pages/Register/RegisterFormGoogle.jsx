import { NavLink } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"

const RegisterFormGoogle = () => {
  return (
    <div className='register-google' >
        <Breadcrumb />
            <form className="registration-form">
                <h2 style={{ marginBottom: '20px' }} >Введите дополнительные данные</h2>
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

                
               


                <div className="registration-links-block">
                    <NavLink to="/" className="registration-link-btn-login">Завершить</NavLink> 
                    
                </div>

            </form>
    </div>
  )
}
 
export default RegisterFormGoogle
