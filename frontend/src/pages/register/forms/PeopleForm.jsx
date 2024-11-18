import React, { useState } from "react";

import './forms.css';
import { useAuth } from "../../../provider/AuthContextProvider";

const PeopleForm = ({type, titleBtn}) => {
  const { userList, addPeople } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type_person:"",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
      type_person: type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da pessoa:", formData);
    console.log("Dados do userList:", userList);
    // Aqui você pode enviar os dados para um backend ou API
    addPeople(formData);
    alert("Pessoa salva com sucesso!");
     // Limpar os campos do formulário
    setFormData({
      name: "",
      phone: "",
      address: "",
    });
  };
  return (
    <form className="people-form" onSubmit={handleSubmit}>
      <div className="section-form-people">
      <div className="name">
        <label htmlFor="name">Nome</label>
        <input type="text" name="people" id="name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Telefone </label>
        <input type="tel" name="people" id="phone" 
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      </div>
      <div className="section-form-people">
        <div className="address">
          <label htmlFor="address">Endereço </label>
          <input type="text" name="people" id="address" 
            value={formData.address}
            onChange={handleChange} />
        </div>
        
        <button type="submit" id="register-client">{titleBtn}</button>
       
      </div>
     
    </form>
  );
}

export default PeopleForm;