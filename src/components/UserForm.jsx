import React, { useState } from "react";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/UserForm.scss";

const UserForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "Мужской",
    birthDate: null,
    phone: "",
    email: "",
    address: "",
    employer: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthDate: date });
    if (errors.birthDate) {
      setErrors({ ...errors, birthDate: "" });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Проверка обязательных полей
    if (!formData.lastName) newErrors.lastName = "Поле является обязательным";
    if (!formData.firstName) newErrors.firstName = "Поле является обязательным";
    if (!formData.birthDate) newErrors.birthDate = "Поле является обязательным";
    if (!formData.phone) newErrors.phone = "Поле является обязательным";
    if (!formData.email) {
      newErrors.email = "Поле является обязательным";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Введен некорректный адрес почты";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма валидна, отправляется запрос");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Информация о сотруднике</h2>

      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          value={formData.lastName}
          onChange={handleChange}
          className={errors.lastName ? "input-error" : ""}
          required
        />
        {errors.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? "input-error" : ""}
          required
        />
        {errors.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="middleName"
          placeholder="Отчество"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </div>

      <div className="form-group">
        <DatePicker
          selected={formData.birthDate}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          placeholderText="дд.мм.гггг"
          className={errors.birthDate ? "input-error" : ""}
          required
        />
        {errors.birthDate && (
          <span className="error-message">{errors.birthDate}</span>
        )}
      </div>

      <div className="form-group">
        <InputMask
          mask="+7 (999) 999-99-99"
          value={formData.phone}
          onChange={handleChange}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="tel"
              name="phone"
              placeholder="Мобильный телефон"
              className={errors.phone ? "input-error" : ""}
              required
            />
          )}
        </InputMask>
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email (необязательно)"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="address"
          placeholder="Адрес постоянной регистрации"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="employer"
          placeholder="Название работодателя"
          value={formData.employer}
          onChange={handleChange}
        />
      </div>

      <button type="submit">СОХРАНИТЬ</button>
    </form>
  );
};

export default UserForm;
