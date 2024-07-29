import React from "react";
import { Link} from "react-router-dom";
import { VacancyList } from "./VacancyList";
import useFetch from "../../components/hooks/useFetch";


const Vacancy = () => {
  const {data, loading} = useFetch()

  
 
  return (
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter">
                <Link to={"/"}>
                  <button>Добавить вакансию</button>
                </Link>
              </div>
              {
                data && data.map((job: any) => {
                  return (
                    <VacancyList 
                    key={job.id}
                    organization_name = {job.organization_name}
                    position = {job.position}
                    paymentType = {job.paymentType}
                    price_from = {job. price_from}
                    price_to={job.price_to}
                    type = {job.type}
                    city = {job.city}
                    currency = {job.currency}
                    organization_icon = {job.organization_icon}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default Vacancy;