import './Restore.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BiLoaderAlt, BiLoaderCircle } from 'react-icons/bi'
import { LuLoaderCircle } from 'react-icons/lu'

const Restore = () => {
    const [step, setStep] = useState(1)
    const [gmail, setGmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()

    const handleEmailSubmit = async (e) => {
       
        e.preventDefault()
        if (!gmail) {
            toast.error('Введите email')
            return
        }

        try {
             setLoading(true)
            const res = await fetch('http://localhost:3000/auth/restore_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail })
            })
            const data = await res.json()
            setLoading(false)
            if (res.ok) {
                toast.success('Код отправлен на почту')
                setStep(2)
            } else {
                toast.error(data.message || 'Ошибка при отправке кода')
            }
        } catch (err) {
            console.error(err)
            toast.error('Ошибка соединения с сервером')
        }
    }

    const handleCodeVerify = async (e) => {
        e.preventDefault()
        if (!code) {
            toast.error('Введите код из письма')
            return
        }

        try {
            setLoading(true)
            const res = await fetch('http://localhost:3000/auth/restore_password/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, code })
            })
            const data = await res.json()
            setLoading(false)

            if (res.ok) {
                toast.success('Код подтверждён, теперь введите новый пароль')
                setStep(3)
            } else {
                toast.error(data.message || 'Неверный или просроченный код')
            }
        } catch (err) {
            console.error(err)
            toast.error('Ошибка соединения с сервером')
        }
    }

    
    const handlePasswordChange = async (e) => {

        e.preventDefault()

        if (!newPassword || !confirmPassword) {
            toast.error('Введите новый пароль и подтверждение')
            return
        }
        if (newPassword !== confirmPassword) {
            toast.error('Пароли не совпадают')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, newPassword })
            })
            const data = await res.json()

            setLoading(false)

            if (res.ok) {
                toast.success('Пароль успешно изменён!')
                setStep(1)
                setGmail('')
                setCode('')
                setNewPassword('')
                setConfirmPassword('')
                navigate('/login')
            } else {
                toast.error(data.message || 'Ошибка при смене пароля')
            }
        } catch (err) {
            console.error(err)
            toast.error('Ошибка соединения с сервером')
        }
    }

    return (
        <div className="container">
            <div className="restore-block">
                <Breadcrumb />
                <h2 className="restore-title">Восстановление пароля</h2>

                
                {step === 1 && (
                    <form className="restore-form" onSubmit={handleEmailSubmit}>
                        <div className="form-group">
                            <label htmlFor="gmail" className="restore-label">
                                Email <span className="required-star">*</span>
                            </label>
                            <input
                                type="email"
                                id="gmail"
                                className="restore-input"
                                value={gmail}
                                onChange={(e) => setGmail(e.target.value)}
                                required
                                placeholder="Введите ваш email"
                            />
                        </div>
                        <div className="restore-links-block">
                            <button disabled={loading} type="submit" className="restore-link-btn-login">
                                {loading ? <BiLoaderAlt /> : 'Отправить код'}
                            </button>
                            <NavLink to="/login" className="restore-link-text">
                                Я вспомнил(-а) пароль!
                            </NavLink>
                        </div>
                    </form>
                )}

              
                {step === 2 && (
                    <form className="restore-form" onSubmit={handleCodeVerify}>
                        <div className="form-group">
                            <label htmlFor="code" className="restore-label">
                                Код восстановления <span className="required-star">*</span>
                            </label>
                            <input
                                type="text"
                                id="code"
                                className="restore-input"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                                placeholder="Введите код из письма"
                            />
                        </div>
                        <div className="restore-links-block">
                            <button disabled={loading} type="submit" className="restore-link-btn-login">
                                {loading ? <LuLoaderCircle /> : 'Проверить код'}
                            </button>
                            <button
                                type="button"
                                className="restore-link-text"
                                onClick={() => setStep(1)}
                            >
                                Назад
                            </button>
                        </div>
                    </form>
                )}

               
                {step === 3 && (
                    <form className="restore-form" onSubmit={handlePasswordChange}>
                        <div className="form-group">
                            <label htmlFor="newPassword" className="restore-label">
                                Новый пароль <span className="required-star">*</span>
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                className="restore-input"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                placeholder="Введите новый пароль"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="restore-label">
                                Подтверждение пароля <span className="required-star">*</span>
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="restore-input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Повторите пароль"
                            />
                        </div>
                        <div className="restore-links-block">
                            <button disabled={loading} type="submit" className="restore-link-btn-login">
                                {loading ? <BiLoaderCircle /> : 'Сменить пароль' }
                            </button>
                            <button
                                type="button"
                                className="restore-link-text"
                                onClick={() => setStep(1)}
                            >
                                Отмена
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Restore
