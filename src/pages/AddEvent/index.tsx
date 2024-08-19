import React from 'react';
import logoevent from "../../assets/images/not-found-events.b4ad3d2.svg"
import tiwi from "../../assets/images/tiwi.svg"
import { Link } from 'react-router-dom';

const AddEvent = () => {
    return (
        <div id='addevent'>
            <div className="container">
                <div className="addevent">
                    <h1>Добавить новое мероприятие</h1>
                    <p>Мероприятие будет опубликовано на сайте и в телеграм канале после проверки модератором. <br /> Мероприятия откровенно рекламного характера или не связанные с IT и <br /> смежными темами будут отклоненны.</p>
                    <h2>Необходимо выбрать тип</h2>
                   <div className="img">
                   <Link to={"/OfflineEvent"}> 
                   <div className="blocks">
                   <img style={{
                        width: "200px"
                    }} src={logoevent} alt="img" />
                    <h3>Оффлайн мероприятие</h3>
                    <p>Если мероприятие планируется в режиме оффлайн, то <br />  можете выбрать данный тип.</p>
                   </div>
                   </Link>
                   <Link to={"/onlineEvent"}>
                   <div className="blockstwo">
                    <img style={{
                        width: "200px"
                    }} src={tiwi} alt="img" />
                    <h3>Онлайн мероприятие</h3>
                    <p>Если планируется провести мероприятиe в режиме онлайн, то  <br /> нужно выбрать данный тип.</p>
                   </div>
                   </Link>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddEvent;