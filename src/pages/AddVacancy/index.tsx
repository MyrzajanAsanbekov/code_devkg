import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../../API';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import LeftMenu from '../LeftMenu';

const AddVacancy = () => {
  const nav = useNavigate()
  const [vacancyValues, setVacancyValues] = useState({
    nameCompany: "",
    priceFrom: "",
    priceTo: "", 
    nameVacancy: "",
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
    const {nameVacancy , priceTo, priceFrom, email, location} = vacancyValues

    if (!priceFrom || !priceTo || !nameVacancy  ||  !email || !location) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
  }
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
          toast.success(response.data.message);
          setVacancyValues({
            nameCompany: "",
            priceFrom: "",
            priceTo: "", 
            nameVacancy: "",
            address: "",
            salaryVacancy: "",
            email: "",
            phone: "",
            location: ""
          });
          nav("/vacancies")
      } else {
          if (response.data.message) {
              toast.error(response.data.message);
          }
      }
  } catch (error) {
      toast.error("Не удалось добавить");
  }
};


  return (
    <div id='addvacancy'>
      <div className="container">
      <LeftMenu/>
        <form className='addVacancy' onSubmit={handleAddVacancy}>
          <div className="createvacancy">
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

        <div className="input-vacan">
          
        <div className="priceFrom">
          <h2>Price From</h2>
          <input
           name='priceFrom'
           value={vacancyValues.priceFrom}
           onChange={inputChangeHandler}
          type="number" />
        
        </div>


        <div className="priceTo">
          <h2>Price To</h2>
          <input
           name='priceTo'
           value={vacancyValues.priceTo}
           onChange={inputChangeHandler}
          type="number" />
        </div>

        <div className="email">
          <h2>E-Mail</h2>
          <input
          name='email'
          value={vacancyValues.email}
          onChange={inputChangeHandler}
          type="email" />
        </div>

        <div className="iphone">
          <h2>Телефон</h2>
          <input
           name='phone'
           value={vacancyValues.phone}
           onChange={inputChangeHandler}
          type="tel" />
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
                 <button>Добавить вакансии</button>
                   </div>  

          </div>
       
        </form>
      </div>
            <ToastContainer />
      
    </div>
  );
};

export default AddVacancy;




