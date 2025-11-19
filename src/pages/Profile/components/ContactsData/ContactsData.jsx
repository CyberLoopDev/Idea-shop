import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import './ContactsData.css';

const ContactsData = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : {};

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: user.full_name || "",
      phone: user.phone || "",
      gmail: user.gmail || "",
      changePassword: false,
      oldPassword: "",
      password: "",
      passwordConfirm: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const changePassword = watch("changePassword");

  useEffect(() => {
    setValue("name", user.full_name || "");
    setValue("phone", user.phone || "");
    setValue("gmail", user.gmail || "");
  }, [user, setValue]);

  const onSubmit = async (data) => {
    if (data.changePassword) {
      if (!data.oldPassword || !data.password || !data.passwordConfirm) {
        alert("Заполните все поля для смены пароля");
        return;
      }
      if (data.password !== data.passwordConfirm) {
        alert("Пароли не совпадают");
        return;
      }
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const payload = { 
        full_name: data.name,
        phone: data.phone,
        gmail: data.gmail
      };
      if (data.changePassword) {
        payload.oldPassword = data.oldPassword;
        payload.password = data.password;
        payload.passwordConfirm = data.passwordConfirm;
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.type === "success") {
        localStorage.setItem("user", JSON.stringify(result.user));
        alert("Профиль успешно обновлен!");
      } else {
        if (Array.isArray(result.message)) {
          alert(result.message.map(e => e.msg).join("\n"));
        } else {
          alert(result.message);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка обновления профиля");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contacts-data">
      <h2 className="title">Контактные данные</h2>
      <form className="co-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="co-input co-input--required">
          <label className="co-input-label">Контактное лицо (ФИО)</label>
          <input
            className="co-input-field"
            placeholder="Введите имя"
            {...register("name", { required: "Поле не заполнено" })}
          />
          {errors.name && <div className="co-input-notice co-notice--danger">{errors.name.message}</div>}
        </div>

        <div className="co-input co-input--required">
          <label className="co-input-label">Контактный телефон</label>
          <input
            className="co-input-field"
            placeholder="+7 (999) 999-99-99"
            {...register("phone", {
              required: "Поле не заполнено",
              pattern: { value: /^\+?[0-9\s()-]{7,}$/i, message: "Неверный формат телефона" }
            })}
          />
          <div className="co-input-description">Например: +7(926)111-11-11</div>
          {errors.phone && <div className="co-input-notice co-notice--danger">{errors.phone.message}</div>}
        </div>

        <div className="co-input co-input--required">
          <label className="co-input-label">Email</label>
          <input
            className="co-input-field"
            placeholder="example@mail.com"
            {...register("gmail", {
              required: "Поле не заполнено",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Неверный формат email" }
            })}
          />
          {errors.gmail && <div className="co-input-notice co-notice--danger">{errors.gmail.message}</div>}
        </div>

        <div className="co-input co-input--checkbox">
          <label className="co-toggable_field">
            <input type="checkbox" {...register("changePassword")} />
            <span className="co-input-label">Сменить пароль</span>
          </label>
        </div>

        {changePassword && (
          <>
            <div className="co-input co-input--required">
              <label className="co-input-label">Старый пароль</label>
              <input type="password" className="co-input-field" {...register("oldPassword", { required: "Поле не заполнено" })}/>
              {errors.oldPassword && <div className="co-input-notice co-notice--danger">{errors.oldPassword.message}</div>}
            </div>
            <div className="co-input co-input--required">
              <label className="co-input-label">Новый пароль</label>
              <input type="password" className="co-input-field" {...register("password", { required: "Поле не заполнено" })}/>
              {errors.password && <div className="co-input-notice co-notice--danger">{errors.password.message}</div>}
            </div>
            <div className="co-input co-input--required">
              <label className="co-input-label">Повторите пароль</label>
              <input type="password" className="co-input-field" {...register("passwordConfirm", { required: "Поле не заполнено", validate: v => v === watch("password") || "Пароли не совпадают" })}/>
              {errors.passwordConfirm && <div className="co-input-notice co-notice--danger">{errors.passwordConfirm.message}</div>}
            </div>
          </>
        )}

        <div className="co-form-controls">
          <button className="co-button co-form-button" type="submit" disabled={loading}>
            {loading ? "Сохраняем..." : "Сохранить изменения"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactsData;
