import React, { useState } from 'react';
import FormVacancy from '../FormVacancy';
import LeftMenu from '../LeftMenu';

const AddVacancy = () => {
 
  
    return (
     <div id='addvacancy'>
     <div className="container">
        <div className="addvacancy">
        <button className="toggle-sidebar">
      </button>
        <LeftMenu/>
      <div className="addvacancy-title">
          <h2>Добавить новую вакансию</h2>
            <span>Вакансия должна относится к сфере информационных технологий и будет опубликована после проверки <br /> модератором</span>
            <FormVacancy/>
          </div>
      </div>
        </div>
     </div>
    );
};

export default AddVacancy;