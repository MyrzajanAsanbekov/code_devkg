import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";
import LeftMenu from "../LeftMenu";

const AddEvents = () => {
    const nav = useNavigate()
    const [eventDetails, setEventDetails] = useState({
        events: "",
        data: "",
        address: "",
        nameOrgan: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEventDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleAddVacancy = async (e: React.FormEvent) => {
        e.preventDefault();

        const { events, data, address, nameOrgan } = eventDetails;

        if (!events || !data || !address || !nameOrgan) {
            toast.error("Пожалуйста, заполните все поля.");
            return;
        }

        try {
            const response = await axios.post(`${API}/events`, {
                id: 0,
                name: events,
                cover: "string",
                slug: "string",
                location: address,
                created_at: "string",
                updated_at: "string",
                date: data,
                gradient: 0,
                event_type: "string",
                button_type: "string",
                organization_name: nameOrgan,
                cover_formats: [null]
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setEventDetails({
                    events: "",
                    data: "",
                    address: "",
                    nameOrgan: ""
                });
                nav("/events")
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
        <div id="addEvents">
            <div className="container">
        <LeftMenu/>
                <form className="addEvents" onSubmit={handleAddVacancy}>
                    <h1>Добавить новое мероприятие</h1>
                    <p>Мероприятие будет опубликовано на сайте и в телеграм канале после проверки модератором. <br /> Мероприятия откровенно рекламного характера или не связанные с IT и смежными темами будут отклоненны.</p>
                    <div className="addEvents--input">
                        <div className="addEvents--input__inpt">
                        <input
                                name="events"
                                onChange={handleChange}
                                value={eventDetails.events}
                                type="text"
                                placeholder="Название"
                            />

                            <input
                                name="data"
                                onChange={handleChange}
                                value={eventDetails.data}
                                type="date"
                                placeholder=""
                            />
                           
                        </div>
                        <div className="addEvents--input__inpt">
                            <input
                                name="nameOrgan"
                                onChange={handleChange}
                                value={eventDetails.nameOrgan}
                                type="text"
                                placeholder="Организация"
                            />
                            <input
                                name="address"
                                onChange={handleChange}
                                value={eventDetails.address}
                                type="text"
                                placeholder="Локация"
                            />
                        </div>
                    </div>
                    <button type="submit">Добавить мероприятия</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddEvents;