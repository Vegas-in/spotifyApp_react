import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccessMessage('¡USUARIO REGISTRADO CORRECTAMENTE!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        setFormData({
          name: '',
          surname: '',
          email: '',
          password: ''
        });
      } else {
        console.error('Error al enviar los datos al servidor');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <section className="form-container"> 
      <h2>Formulario</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="form"> 
        <div className="form-group"> 
          <label htmlFor="name" className="form-label">Nombre:</label> 
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname" className="form-label">Apellido:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">Enviar</button> 
      </form>
    </section>
  );
};


export default Form;
