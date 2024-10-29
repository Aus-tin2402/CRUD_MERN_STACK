import React, { useEffect, useState } from 'react'
import './Css/findAll.css'
import axios from 'axios'

const FindAll = () => {
    const [data, setData] = useState([{}]); 

    const fetchAll = async () => {
        try {
            let response = await axios.get(`http://localhost:4024/crud/Application/getAll`);
            // console.log(response.data);
            setData(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchAll()
    },[])
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
 
        
    
    return (
        <>
            <header className="findAll" id="findAll">
                <section className="title">
                    <h1>FindAll Page</h1>
                </section>
                <section className="header">
                    <table border={`2px`} >
                { data.length>=0 &&
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User DOB</th>
                            <th>User Email</th>
                            <th>User Contact</th>
                            <th>User Password</th>
                            <th>User Address</th>
                        </tr>
                    </thead>
                        
                    
                }
                   
                {
                    data.length>0 ?(
                            data.map((object,index)=>{
                                return(
                                    <tbody key={index}>
                                        <tr>
                                            <td>{object._id}</td>
                                            <td>{object.name}</td>
                                            <td>{formatDate(object.dob)}</td>
                                            <td>{object.email}</td>
                                            <td>{object.contact}</td>
                                            <td>{object.password}</td>
                                            <td>{object.address}</td>
                                        </tr>
                                    </tbody>
                                )                              
                            })
                    ):(
                        <p>No Data</p>
                    )
                }
                    </table>
                </section>
            </header>
        </>
    );
}

export default FindAll;
