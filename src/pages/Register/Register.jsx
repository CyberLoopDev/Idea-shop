import { NavLink, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './Register.css'
import { GoogleLogin } from '@react-oauth/google'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const showToast = (text) => {
        toast.success(text, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        })
    }

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:3000/auth/register', data)
            setLoading(false)

            if (res.data.type === 'success') {
                localStorage.setItem('token', res.data.jwt)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                showToast('Регистрация успешна!')
                navigate('/profile')
            } else {
                showToast(res.data.message)
            }
        } catch (err) {
            setLoading(false)
            showToast(err.response?.data?.message || 'Ошибка сервера')
        }
    }

    const password = watch('password', '')

    return (
        <div className="container">
            <div className="registration-block">
                <Breadcrumb/>

                <h2 className="registration-title">Регистрация</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                    <div className="form-group">
                        <label htmlFor="fullName" className="registration-label">
                            Контактное лицо (ФИО) <span className="required-star">*</span>
                        </label>
                        <input
                            id="fullName"
                            className="registration-input"
                            {...register("full_name", { required: "Введите ФИО", minLength: { value: 2, message: "Минимум 2 символа" } })}
                        />
                        {errors.full_name && <span className="error">{errors.full_name.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="registration-label">
                            Контактный телефон <span className="required-star">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className="registration-input"
                            {...register("phone", { required: "Введите телефон", pattern: { value: /^\+?[0-9]{10,15}$/, message: "Некорректный номер" } })}
                        />
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="gmail" className="registration-label">
                            Gmail <span className="required-star">*</span>
                        </label>
                        <input
                            id="gmail"
                            type="email"
                            className="registration-input"
                            {...register("gmail", { required: "Введите Gmail", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Некорректный Gmail" } })}
                        />
                        {errors.gmail && <span className="error">{errors.gmail.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="registration-label">
                            Пароль <span className="required-star">*</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="registration-input"
                            {...register("password", { required: "Введите пароль", minLength: { value: 6, message: "Минимум 6 символов" } })}
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="registration-label">
                            Повторите пароль <span className="required-star">*</span>
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className="registration-input"
                            {...register("confirmPassword", { 
                                required: "Повторите пароль",
                                validate: value => value === password || "Пароли не совпадают"
                            })}
                        />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                    </div>

                    <div className="registration-links-block">
                        <button type="submit" className="registration-btn" disabled={loading}>
                            {loading ? "Регистрация..." : "Зарегистрироваться"}
                        </button>
                        <NavLink to="/profile" className="registration-link-text">У меня уже есть аккаунт</NavLink>
                    </div>
                </form>

                <div className="google-login-block">
                    <GoogleLogin 
                        onSuccess={async (credentialResponse) => {
                            const { credential } = credentialResponse
                            try {
                                const res = await axios.post('http://localhost:3000/auth/google', { credential })
                                localStorage.setItem('token', res.data.jwt)
                                localStorage.setItem('user', JSON.stringify(res.data.user))
                                showToast('Вход через Google успешен')
                                navigate('/profile')
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

export default Registration
