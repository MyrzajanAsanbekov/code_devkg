import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { API } from '../../API';

const AddVideoPage = () => {
    const nav = useNavigate()
    const [videoValues, setVideoValues] = useState({
        title: "",
        organizationName: "",
        data: "",
        coverFormats: "",
        cover: "",
      });

      const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let currentInput  = e.target.name
        setVideoValues({
          ...videoValues,
          [currentInput]: e.target.value
        })
      }

      const handleAddVideo = async (e: React.FormEvent) => {
        e.preventDefault();
        const {title, organizationName, data} = videoValues
    
        if (!title || !organizationName ||  !data) {
          toast.error("Пожалуйста, заполните все поля.");
          return;
      }
        try {
            const response = await axios.post(`${API}/meetups`, {
                organization_name: videoValues.title,
                type: 'type',
                id: Math.random(),
                title: "",
                slug: '',
                cover: "",
                created_at: '',
                updated_at: '',
                date: true,
                gradient: 0,
                organization_icon: '',
                organization_icon_formats: [null]
            });
    
            if (response.data.success) {
              toast.success(response.data.message);
              setVideoValues({
                title: "",
                organizationName: "",
                data: "",
                coverFormats: "",
                cover: "",
              });
              nav("/video")
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
        <div id='videoPage'>
            <div className="container">
            <div className="modal"> 
         <div className="nav">
         <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="38"
            fill="none"
          >
            <path
              fill="#000"
              d="M29.31 0h-9.437v9.5h9.437V0zM54.16 12.785v16.507h-3.028v-1.386c-.825 1.069-2.123 1.702-3.814 1.702-3.106 0-5.701-2.73-5.701-6.214 0-3.484 2.595-6.215 5.701-6.215 1.691 0 2.989.673 3.814 1.702v-6.096h3.028zm-2.988 10.609c0-1.98-1.377-3.325-3.264-3.325-1.848 0-3.224 1.346-3.224 3.325s1.376 3.325 3.224 3.325c1.848 0 3.264-1.346 3.264-3.325zM62.614 27.115c1.061 0 2.005-.515 2.398-1.188l2.988-.04c-.707 2.375-2.791 3.721-5.426 3.721-3.814 0-6.29-2.73-6.29-6.214 0-3.484 2.516-6.215 6.212-6.215 3.46 0 5.819 2.771 5.819 6.215 0 .435-.04.831-.118 1.266h-8.768c.432 1.663 1.69 2.455 3.185 2.455zm2.752-4.87c-.354-1.701-1.573-2.374-2.831-2.374-1.612 0-2.713.87-3.067 2.375h5.898zM80.307 17.496l-4.285 11.796h-3.067l-4.247-11.796h3.224l2.595 8.035 2.596-8.035h3.184zM88.84 29.292l-4.09-5.344v5.344h-3.027V12.785h3.028v9.896l3.853-5.185h3.5l-4.444 5.819 4.68 5.977h-3.5zM105 17.496v11.242c0 3.879-3.067 5.62-6.016 5.62-3.027 0-5.82-1.662-5.82-4.71h3.028c0 1.03.983 2.019 2.792 2.019 1.887 0 3.028-1.03 3.028-2.89V27.51c-.826 1.109-2.124 1.782-3.893 1.782-3.106 0-5.701-2.692-5.701-6.057 0-3.325 2.595-6.056 5.701-6.056 1.77 0 3.028.673 3.893 1.781v-1.464H105zm-2.949 5.7c0-1.86-1.376-3.206-3.264-3.206-1.887 0-3.263 1.345-3.263 3.206 0 1.9 1.376 3.246 3.263 3.246 1.888 0 3.264-1.346 3.264-3.246z"
            />
            <path
              stroke="#000"
              stroke-width="9.48"
              d="M19.88 14.26H5.7v18.99h14.2a4.7 4.7 0 0 0 4.7-4.7V19"
            />
          </svg>
         <a onClick={() => nav("/addVacancy")}>Вакансия</a>
           <a onClick={() => nav("/addEvent")}>Мероприятия</a>
          <a onClick={() => nav("/AddVideo")}>Видео</a>
         </div>
        </div> 
        <form className='createVideo' onSubmit={handleAddVideo}>
                <div className="videoPage">
                    <h1>Добавить новое видео</h1>
                    <p>Видео будет опубликованно на сайте и в телеграм канале после проверки модератором. Трансляции и видео откровенно рекламного <br /> характера или не связанные с IT и  смежными темами будут отклоненны.</p>
               
                <div className="videoInputs">
                    <h2>Изображение</h2>
                    <input
                    name='coverFormats'
                    value={videoValues.cover}
                    onChange={inputChangeHandler}
                    type="file"  />
                </div>
                <div className="videoInputs1">
                    <h2>Название<span>*</span></h2>
                    <input
                    name='title'
                    value={videoValues.title}
                    onChange={inputChangeHandler}
                    type="text" />
                </div>
                <div className="videoInputs2">
                    <h2>Организация<span>*</span></h2>
                    <input
                    name='organizationName'
                    value={videoValues.organizationName}
                    onChange={inputChangeHandler}
                    type="text" />
                </div>
                <div className="videoInputs3">
                    <h2>Ссылка на YouTube или ID ролика <span>*</span></h2>
                    <input
                    name='coverFormats'
                    onChange={inputChangeHandler}
                    value={videoValues.coverFormats}
                    type="url" />
                </div>
                <div className="videoInputs4">
                    <h2>Дата и время <span>*</span></h2>
                <input
                     name="data"
                     onChange={inputChangeHandler}
                     value={videoValues.data}
                     type="date"
                     />
                </div>
                <div className="btns">
                    <button>Добавить видео</button>
                </div>
            </div>
            </form>
            </div>
            <ToastContainer />

        </div>
    );
};

export default AddVideoPage;