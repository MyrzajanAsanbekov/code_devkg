import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import CommunityList from "./CommunityList";
import useFetch from "../../components/hooks/useFetch";
import loadingImg from "../../assets/images/loading.svg"

const Community = () => {

  const { data, loading } = useFetch({ url: "http://3.38.98.134/community" }); 
    if (loading) {
      return <div className="loading" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

      }}>
        <img src={loadingImg} alt="img" />
      </div>
    }

  return (
    <div id="community">
      <div className="container">
        <div className="community">
         <CommunityList data={data}/>
        </div>
      </div>
    </div>  
  );
};

export default Community;