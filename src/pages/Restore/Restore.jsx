import './Restore.css'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Restore = () => {
    const [step, setStep] = useState(1)
    const [gmail, setGmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // 1️⃣ Отправка кода
    const handleEmailSubmit = async (e) => {
        e.preventDefault()
        if (!gmail) {
            toast.error('Введите email')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail })
            })
            const data = await res.json()

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

    // 2️⃣ Проверка кода
    const handleCodeVerify = async (e) => {
        e.preventDefault()
        if (!code) {
            toast.error('Введите код из письма')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, code })
            })
            const data = await res.json()

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

    // 3️⃣ Смена пароля
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

        try {
            const res = await fetch('http://localhost:3000/auth/restore_password/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, newPassword })
            })
            const data = await res.json()

            if (res.ok) {
                toast.success('Пароль успешно изменён!')
                setStep(1)
                setGmail('')
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

                {/* 1️⃣ Шаг — ввод email */}
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
                            <button type="submit" className="restore-link-btn-login">
                                Отправить код
                            </button>
                            <NavLink to="/login" className="restore-link-text">
                                Я вспомнил(-а) пароль!
                            </NavLink>
                        </div>
                    </form>
                )}

                {/* 2️⃣ Шаг — проверка кода */}
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
                            <button type="submit" className="restore-link-btn-login">
                                Проверить код
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

                {/* 3️⃣ Шаг — смена пароля */}
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
                            <button type="submit" className="restore-link-btn-login">
                                Сменить пароль
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
