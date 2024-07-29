import React from "react";
import { useNavigate } from "react-router-dom";

const VideoList = ({
    title = '',
    organization_name = '',
    date = '',
    cover_formats = ''
} : {
    title: string;
    organization_name:string;
    date: string;
    cover_formats: any;
}) => {
    const nav = useNavigate()

    const filtered = cover_formats[0]?.url  
    
  return (
    <div className="video--cards__card" onClick={() => nav("/videoDetail")}>
      <h1>
        {title}
      </h1>
      <div className="video--cards__card--titles">
        <div className="video--cards__card--titles__title">
          <h3>Организатор</h3>
          <h2>{organization_name}</h2>
        </div>
        <div className="video--cards__card--titles__title">
          <h3>Когда</h3>
          <h2>30 августа 2023</h2>
        </div>
      </div>
      <div className="video--cards__card--img"></div>
      <img
        src={`${filtered}`}
        alt="img"
      />
    </div>
  );
};

export default VideoList;
