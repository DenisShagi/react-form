import React, { useState } from "react";
import '../styles/UserForm.scss';

const UserForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "Мужской",
    birthDate: "",
    phone: "",
    email: "",
    address: "",
    employer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { lastName, firstName, birthDate, phone, email } = formData;
    if (lastName && firstName && birthDate && phone && email) {
      alert("Форма валидна, отправляется запрос");
    } else {
      alert("Пожалуйста, заполните все обязательные поля");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Информация о сотруднике</h2>
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="firstName"
        placeholder="Имя"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="middleName"
        placeholder="Отчество"
        value={formData.middleName}
        onChange={handleChange}
      />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </select>
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Мобильный телефон"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email (необязательно)"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Адрес постоянной регистрации"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer"
        placeholder="Название работодателя"
        value={formData.employer}
        onChange={handleChange}
      />
      <button type="submit">СОХРАНИТЬ</button>
    </form>
  );
};

export default UserForm;
