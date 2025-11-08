import './Restore.css'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Restore = () => {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleEmailSubmit = async (e) => {
        e.preventDefault()
        if (!email) {
            toast.error('Пожалуйста, введите ваш email')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
            const data = await res.json()
            if (res.ok) {
                toast.success('Код отправлен на вашу почту')
                setStep(2)
            } else {
                toast.error(data.message || 'Ошибка отправки кода')
            }
        } catch (err) {
            console.error(err)
            toast.error('Ошибка соединения с сервером')
        }
    }

    const handleCodeSubmit = async (e) => {
        e.preventDefault()
        if (!code || !newPassword || !confirmPassword) {
            toast.error('Заполните все поля')
            return
        }
        if (newPassword !== confirmPassword) {
            toast.error('Пароли не совпадают')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, code, newPassword })
            })
            const data = await res.json()
            if (res.ok) {
                toast.success('Пароль успешно изменён!')
                setStep(1)
                setEmail('')
                setCode('')
                setNewPassword('')
                setConfirmPassword('')
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
                            <label htmlFor="email" className="restore-label">
                                Email <span className="required-star">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="restore-input"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Введите ваш email"
                            />
                        </div>

                        <div className="restore-links-block">
                            <button type="submit" className="restore-link-btn-login">
                                Отправить код
                            </button>
                            <NavLink to="/login" className="restore-link-text">
                                Я вспомнил(-а) пароль!
                            </NavLink>
                        </div>
                    </form>
                )}

                {step === 2 && (
                    <form className="restore-form" onSubmit={handleCodeSubmit}>
                        <div className="form-group">
                            <label htmlFor="code" className="restore-label">
                                Код восстановления <span className="required-star">*</span>
                            </label>
                            <input
                                type="text"
                                id="code"
                                className="restore-input"
                                required
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Введите код из письма"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="newPassword" className="restore-label">
                                Новый пароль <span className="required-star">*</span>
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                className="restore-input"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
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
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Повторите пароль"
                            />
                        </div>

                        <div className="restore-links-block">
                            <button type="submit" className="restore-link-btn-login">
                                Сменить пароль
                            </button>
                            <NavLink to="/login" className="restore-link-text">
                                Отмена
                            </NavLink>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Restore
