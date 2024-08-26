import React from 'react';

const OfflineEvent = () => {
    return (
        <div id='offlineevent'>
            <div className="container">
                <div className="offlineevent">
                    <h1>Добавить новое мероприятие</h1>
                    <p>Мероприятие будет опубликовано на сайте и в телеграм канале после проверки модератором. Мероприятия откровенно рекламного характера или не связанные с IT и <br /> смежными темами будут отклоненны.</p>
                </div>
                <div className="inputsone">
                    <h2>Изображение</h2>
                    <input type="file" />
                    <p>Тут можно загрузить фоновое изображение карточки для привлечения <br /> внимания.
                    <span>Не используйте изображения с текстом, вся необходимая информация <br /> будет добавлена автоматически.</span>
                    </p>
                </div>
                <div className="inputstwo">
                    <h2>Организация <span>*</span></h2>
                </div>
                <div className="inputs3">
                    <h2>Организация <span>*</span></h2>
                    <div className="inputs4">
                    <h2>Название <span>*</span></h2>
                    <div className="inputs5">
                    <h2>Тип <span>*</span></h2>
                </div>
                <div className="inputs6">
                    <h2>Описание <span>*</span></h2>
                </div>
                <div className="inputs7">
                    <h2>Адрес <span>*</span></h2>
                </div>
                <div className="inputs8">
                    <h2>Дата <span>*</span></h2>
                </div>
                <div className="inputs9">
                    <h2>Имя кнопки </h2>
                </div>
                <div className="inputs10">
                    <h2>Веб-сайт</h2>
                </div>
                <div className="inputs11">
                    <h2>Ссылка на регистрацию</h2>
                </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default OfflineEvent;