import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { GoogleLogin } from '@react-oauth/google'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const showToast = (text) => {
                toast.success(text , {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  theme: "light",
                });
              };

    const onSubmit = async({gmail, password}) => {
        setLoading(true)
        try{

        const res = await axios.post('http://localhost:3000/auth/login', { gmail, password })
        setLoading(false)

        if(res.data.type === 'success'){
            localStorage.setItem('token', res.data.jwt)
            localStorage.setItem('user', JSON.stringify(res.data.existing_user))
                navigate('/profile')
             showToast("Успешно выполнено авторизация")   
             
             
        } else{
            setLoading(false)
            showToast(res.data.message)
        }



        } catch(err) {
    setLoading(false)
    showToast(err.response?.data?.message || "Ошибка сервера")
}


    }

    return (
        <div className="container">
              
            <div className="profile-block">
                <Breadcrumb/>
            
            <h2 className="profile-title">Вход в кабинет покупателя</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
                <div className="form-group">
                    <label htmlFor="gmail" className="profile-label">
                          Gmail <span className="required-star">*</span>
                    </label>
                    <input 
                    { ...register("gmail", { required: "Введите gmail", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Некорректный Gmail" } }) }
                        className="profile-input" 
                    />
                    { errors.gmail && <span className='error'>{ errors.gmail.message }</span> }
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="profile-label">
                        Пароль <span className="required-star">*</span>
                    </label>
                    <input 
                    { ...register("password", { required: "Введите пароль", minLength: { value: 6, message: "Минимум 6 символов" } }) }

                        className="profile-input" 
                        
                    />
                    { errors.password && <span  className='error' >{ errors.password.message }</span> }
                </div>
            
                <div className="profile-links-block">
                    <button type='submit'   className={'login-btn'}>Войти</button>
                    
                    <NavLink to="/restore" className="profile-link-text">Восстановить пароль</NavLink>
                    <NavLink to="/registration" className="profile-link-text">Зарегистрироваться</NavLink>
                </div>
            </form>
            <div className="google-login-block">
                <GoogleLogin 
                        onSuccess={async (credentialResponse) => {
                            const { credential } = credentialResponse
                            try {
                                const res = await axios.post('http://localhost:3000/auth/google', { credential })
                                console.log(res.data)
                              
                                localStorage.setItem('token', res.data.jwt)
                                localStorage.setItem('user', JSON.stringify(res.data.user))
                                  if (res.data.needsProfile) {
                                        showToast("Добро пожаловать! Завершите регистрацию профиля");
                                        navigate('/register_google');
                                    } else {
                                         showToast("Вход через Google успешен!");
                                        navigate('/profile');
                                        }
                                
                            } catch(err) {
                                showToast('Ошибка Google Login')
                            }
                        }}
                        onError={() => showToast('Google login failed')}
                        theme="filled_blue"
                        size="large"
                        shape="rectangular"
                        width="280"
                    />
            </div>
            </div>
            
        </div>
    )
}

export default Login