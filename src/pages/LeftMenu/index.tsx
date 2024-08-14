import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftMenu = () => {
    return (
        <div className="left-menu">
        <div className="logo">
          <img
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAolBMVEX////E3uiSwteWwtmUv9mxz+SNwdYAhbQAhrgAf7lios0XibwLhLwAfbxmoc/c7vHc7fHh7fRZospfocxbnMyNttvn8/YAl6QAmqwAlq0Akq8AjrETkLgPmLQVjboUjrkWi7sAc7YAecESc8VomNXy9/oAdMAVb8VqldaXud4jc8YbbMeFttZWkc4bacgBfL6QquAAV8a7y+tjqMpwqc9yoNRKv/LxAAAAsUlEQVR4Ac3PQwLEQBAF0FFs27bvf7WJNuE6f9N4jarX4/P+fH/AFYIQjKBX+IGwG4RxgtxvUhRFj2G+LMcLOxMlWVE1HUKAaXWChqab+CmOpuqWfX5TMQxt7MK5QNUSx4ngup6/R1XVoGDCMIziA2o6PGHieUfUNGvFNDuibsJ5LghFGpUHHNvAkcoNx4tlvUfLxHBixDTKGmaPMDybF5VNu+8z6Pq+J4dh8Ovx3lPzB4eKErshMDnHAAAAAElFTkSuQmCC"
            alt="img"
          />
          <b>devkg</b>
        </div>
         <div className="link">
         <NavLink to={""}>Вакансии</NavLink>
         <NavLink to={""}>Мероприятии</NavLink>
         <NavLink to={""}>Видео</NavLink>
         </div>
        <div className="loguot">
        <NavLink to={""}>Выйти</NavLink>
        </div>
      </div>
    );
};

export default LeftMenu;