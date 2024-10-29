import React, { useState } from 'react'
import './Css/findId.css'
import axios from 'axios'
const findByID = () => {
    const [ID, setID] = useState('');
    const [data, setData] = useState(null);

    console.log(data);
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.get(`http://localhost:4024/crud/Application/getById/${ID}`)
            setData(response.data);

        } catch (error) {
            window.alert(`Error -> ${error}`)
        }
    }

    return (
        <>
            <header className="id" id="id">
                <div className="title">
                    <h1>FindBY Id</h1>
                </div>
                <section className="find">
                    <article className="container">
                        {data === null && (
                            <form onSubmit={(e)=>HandleSubmit(e)    }>
                                <div className="input-group-feild">
                                    <label htmlFor="user_id">Ent    er Your User ID:</label>
                                    <input
                                        type={`text`}
                                        id='user_id'
                                        name='user_id'
                                        placeholder='Enter Your User ID:'
                                        value={ID}
                                        onChange={(e) => setID(e.target.value)}
                                        required
                                    />
                                </div>
                                <aside className="button">
                                    <button>Fetch</button>
                                </aside>
                            </form>
                        )}
                        {data != null && (
                            <div className="box">
                                <section className="detials">
                                    <h1>Name:</h1>
                                    <span>{data.name}</span>
                                </section>
                                <section className="detials">
                                    <h1>Date-Of-Birth:</h1>
                                    <span>{formatDate(data.dob)}</span>
                                </section>
                                <section className="detials">
                                    <h1>Email:</h1>
                                    <span>{data.email}</span>
                                </section>
                                <section className="detials">
                                    <h1>Contact:</h1>
                                    <span>{data.contact}</span>
                                </section>
                                <section className="detials">
                                    <h1>Password:</h1>
                                    <span>{data.password}</span>
                                </section>
                                <section className="detials">
                                    <h1>Address:</h1>
                                    <span>{data.address}</span>
                                </section>
                            </div>
                        )}
                    </article>
                </section>
            </header>
        </>
    )
}

export default findByID