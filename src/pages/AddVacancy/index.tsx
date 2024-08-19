import React from 'react';

const AddVacancy = () => {
  return (
    <div id='addvacancy'>
      <div className="container">
        <div className="addvacancy">
          <h1>Добавить новую вакансию</h1>
          <p>
          Вакансия должна относится к сфере информационных технологий и будет опубликована после проверки модератором</p>
        </div>
        <div className="organization">
          <h2>Организация <span>*</span></h2>
          <button>Создать или выбрать озганизацию</button>
        </div>


        <div className="doljnost">
          <h2> Должность <span>*</span>  </h2>
          <input type="text" /> <line>Например “Project Manager”</line>
        </div>


        <div className="vacancy">
          <h2>Описание вакансии <span>*</span></h2>
          <p>Здесь необходимо указать условия труда, требования и обязанности. <br />  Также вы можете указать краткое описание компании, например: <br />
             “В дружный отдел дизайна игровой студии ”Bloody Fun” требуется проект менеджер со стажем” 
             </p>
          <input type="text" />
           <div className="text">
           <h4>Длина текста: 0 символов, минимально допустимое значение 200 символов
          </h4>
          
           </div>
        </div>

        <div className="telegram">
          <h2>Telegram</h2>
          <input type="text" /> <p>
          Не обязательно заполнять все поля для контактов. Например если у <br /> вас нет почты или вы не хотите оставлять свой телеграм, оставьте поле пустым.</p>
        </div>


        <div className="skype">
          <h2>Skype</h2>
          <input type="text" />
        </div>

        <div className="email">
          <h2>E-Mail</h2>
          <input type="text" />
        </div>

        <div className="iphone">
          <h2>Телефон</h2>
          <input type="text" />
        </div>

        <div className="tiping">
          <h2>Тип <span>*</span></h2>
          <input type="file " name='resume' /> 
          <p>
          Обязательное поле в котором вы можете выбрать тип работы для <br /> вашей вакансии.</p>
          <div className="important">
            <span>Не заполненны обязательные поля: 
              </span>
              <line> Организация, Должность, Описание вакансии, Тип, Контакт</line>
          </div>
          <div className="btn">
            <button>Продолжить</button>
            <button>Сохранить</button>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default AddVacancy;