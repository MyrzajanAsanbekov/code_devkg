import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../../assets/images/fotoVideo.svg"
import LeftMenu from '../LeftMenu';

const AddVideo = () => {
    const nav = useNavigate()
    return (
        <div id='addvideo'>
            <div className="container">
          <LeftMenu/>
                <div className="addvideo">
                    <img src={video} alt="img" />
                    <p>Записи онлайн и оффлайн конференций специалистов для <br />  обмена опытом в неформальной обстановке.</p>
                    <h2>Хотите добавить видео?</h2>
                    <button onClick={() => nav("/AddVideoPage")}>Добавить видео</button>
                </div>
            </div>
            
        </div>
    );
};

export default AddVideo;