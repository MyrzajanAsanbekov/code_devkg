import React from "react";
import { Route, Routes } from "react-router-dom";
import Vacancy from "../../pages/Vacancy";
import Event from "../../pages/Event";
import Video from "../../pages/Video";
import Organizations from "../../pages/Organizations";
import Community from "../../pages/Community";
import DetailPage from "../../pages/DetailPage";
import DetailPosition from "../../pages/DetailPosition";
import VideoDetail from "../../pages/VideoDetail";
import EventDetals from "../../pages/EventDetals";
import Hero from "../../pages/Hero";
import Vacancies from "../../pages/Vacancy";
import Auth from "../../pages/Auth/intex";
import RouterProtector from "../../RouterProtector";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="vacancies" element={
          <RouterProtector><Vacancy/></RouterProtector>}/>
        <Route path="/events" element={<Event />} />
        <Route path="/video" element={<Video />} />
        <Route path="/organization" element={<Organizations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detailPosition" element={<DetailPosition />} />
        <Route path="/videoDetail" element={<VideoDetail />} />
        <Route path="/eventDetals" element={<EventDetals />} />
        <Route path="" element={<EventDetals />} />
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </div>
  );
};

export default Main;