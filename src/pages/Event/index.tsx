import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import EventsList from "./EventsList";



function Events() {
const events_url = 'http://3.38.98.134/events' 
      
const  { data, loading } = useFetch({url: events_url});


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