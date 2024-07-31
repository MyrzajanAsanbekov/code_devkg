import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import EventsList from "./EventsList";
import loadingImg from "../../assets/images/loading.svg"




function Events() {
const events_url = 'http://3.38.98.134/events' 
      
const  { data, loading } = useFetch({url: events_url});

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
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        {data &&
                  data.map((el: any, idx: number) => {
                    return (
                      <EventsList
                        key={idx}
                        location={el.location}
                        name={el.name}
                        organization_name={el.organization_name}
                        date={el.date}
                        
                      />
                    );
                  })}
      </div>
    </div>
  )
}

export default Events