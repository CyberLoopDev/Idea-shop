import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";
import "./Register.css"; 

const RegisterFormGoogle = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const showToast = (text) => {
    toast.success(text, {
      position: "right",
      autoClose: 1000,
      hideProgressBar: true,
      theme: "light",
    });
  };

  const onSubmit = async (data) => {

   try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (!token || !user?._id) {
        showToast("Вы не авторизованы!", "error");
        return navigate("/login");
      }

      const payload = {
        userId: user._id,
        full_name: data.full_name,
        phone: data.phone,
      };

      const res = await axios.patch(
        "http://localhost:3000/auth/complete_profile",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.type === "success") {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        showToast("Профиль успешно дополнен!");
        navigate("/profile");
      } else {
        showToast(res.data.message || "Ошибка при обновлении профиля", "error");
      }
    } catch (err) {
      toast.error("Ошибка при обновлении профиля");
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="registration-block">
        <Breadcrumb />
        <h2 className="registration-title">Дополните профиль</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <div className="form-group">
            <label className="registration-label">
              Контактное лицо (ФИО) <span className="required-star">*</span>
            </label>
            <input
              type="text"
              className="registration-input"
              {...register("full_name", {
                required: "Введите ваше имя",
                minLength: { value: 2, message: "Минимум 2 символа" },
              })}
            />
            {errors.full_name && <span className="error">{errors.full_name.message}</span>}
          </div>

          <div className="form-group">
            <label className="registration-label">
              Контактный телефон <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              className="registration-input"
              {...register("phone", {
                required: "Введите номер телефона",
                pattern: { value: /^[0-9+() -]+$/, message: "Некорректный формат" },
              })}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>

          <div className="registration-links-block">
            <button type="submit" className="registration-link-btn-login">
              Завершить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormGoogle;
