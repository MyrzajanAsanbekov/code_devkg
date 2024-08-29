import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../../API';
import { useNavigate } from 'react-router-dom';

const AddVacancy = () => {
  const nav = useNavigate()
  const [vacancyValues, setVacancyValues] = useState({
    nameCompany: "",
    priceFrom: "",
    priceTo: "", 
    nameVacancy: "",
    currency: "",
    address: "",
    salaryVacancy: "",
    email: "",
    phone: "",
    location: ""
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let currentInput  = e.target.name
    setVacancyValues({
      ...vacancyValues,
      [currentInput]: e.target.value
    })
  }

  const handleAddVacancy = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${API}/jobs`, {
            organization_name: vacancyValues.nameCompany,
            price_from:vacancyValues.priceFrom,
            price_to: vacancyValues.priceTo,
            currency: 'currency',
            position: vacancyValues.nameVacancy,
            city: vacancyValues.address,
            salary: vacancyValues.salaryVacancy,
            phone: vacancyValues.phone,
            email: vacancyValues.email,
            type: 'type',
            id: Math.random(),
            slug: '',
            location: "",
            created_at: '',
            updated_at: '',
            is_archived: true,
            gradient: 0,
            workday: '',
            organization_icon: '',
            organization_icon_formats: [null]
        });

        if (response.data.success) {
            
        }
        alert(response.data.message);
    } catch (error) {
        alert("Не удалось добавить вакансию");
    }
};


  return (
    <div id='addvacancy'>
      <div className="container">
        <form className='addVacancy' onSubmit={handleAddVacancy}>
        <div className="addvacancy" >
          <h1>Добавить новую вакансию</h1>
          <p>
          Вакансия должна относится к сфере информационных технологий и будет опубликована после проверки модератором</p>
        </div>
        <div className="doljnost">
          <h2> Должность <span>*</span>  </h2>
          <input 
          name='nameVacancy'
          value={vacancyValues.nameVacancy}
          onChange={inputChangeHandler}
          type="text" /> 
        </div>
        <div className="vacancy">
          <h2>Описание вакансии <span>*</span></h2>
     <div className="discription">
          <input
          name='currency'
          value={vacancyValues.currency}
          onChange={inputChangeHandler}
          type="message" />
     </div>
        </div>

        <div className="input-vacan">
          
        <div className="priceFrom">
          <h2>Price From</h2>
          <input
           name='priceFrom'
           value={vacancyValues.priceFrom}
           onChange={inputChangeHandler}
          type="text" />
        
        </div>


        <div className="priceTo">
          <h2>Price To</h2>
          <input
           name='priceTo'
           value={vacancyValues.priceTo}
           onChange={inputChangeHandler}
          type="text" />
        </div>

        <div className="email">
          <h2>E-Mail</h2>
          <input
          name='email'
          value={vacancyValues.email}
          onChange={inputChangeHandler}
          type="text" />
        </div>

        <div className="iphone">
          <h2>Телефон</h2>
          <input
           name='phone'
           value={vacancyValues.phone}
           onChange={inputChangeHandler}
          type="text" />
        </div>
        <div className="adress">
          <h2>Location</h2>
          <input
          name='location'
          value={vacancyValues.location}
          onChange={inputChangeHandler}
          type="text" />
        </div>

        <div className="tiping">
          <h2>Тип <span>*</span></h2>
          <select
              id="type"
                  required
                >
                  <option value="for" >
                    Выберите тип работы
                  </option>
                  <option value="full-time">Полная занятость</option>
                  <option value="part-time">Частичная занятость</option>
                  <option value="remote">Удаленная работа</option>
                </select>
        </div>
        </div>
                <div className="btn">
                 <button onClick={() => nav("/vacancies")}>Продолжить</button>
                   </div>  
        </form>
      </div>
      
    </div>
  );
};

export default AddVacancy;


