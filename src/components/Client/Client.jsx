import React, { useEffect, useState } from 'react';
import './Client.css';
import axios from 'axios';

const Client = () => {
    const [clientData, setClientData] = useState([])
    const fetchData = () => {
        axios.get("https://farzanatech.com/hrm/api/contact")
        // axios.get("https://farzanatech.com/portfolio/admin/api/contact/")
            .then(res => {
                console.log(res.data.contact)
                setClientData(res.data)
            })

    }


    useEffect(() => {
        axios.get("https://farzanatech.com/hrm/api/contact")
        // axios.get("https://farzanatech.com/portfolio/admin/api/contact/")
            .then(res => {
                const data = res.data.contact;  
                if (Array.isArray(data)) {
                    setClientData(data);
                } else {
                    setClientData([]);  
                }
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setClientData([]); 
            });
    }, []);
    return (
        <div className="client-container">
            <table className="client-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientData?.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.subject}</td>
                                    <td>{data.message}</td>
                                </tr>
                            );
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Client;

