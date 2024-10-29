import React, { useState } from 'react'
import './Css/remove.css'
import axios from 'axios'
const Remove = () => {
    const [ID, setID] = useState('');

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.delete(`http://localhost:4024/crud/Application/removeAccount/${ID}`)
            console.log(response.data);

        } catch (error) {
            window.alert(`Error -> ${error}`)
        }

    }
    return (
        <>
            <header className="remove" id="remove">
                <div className="title">
                    <h1>Remove Account Page</h1>
                </div>
                <section className="remove-form">
                    <article className="container">
                        <form onSubmit={(e) => HandleSubmit(e)}>
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
                                <button>Remove</button>
                            </aside>
                        </form>
                    </article>
                </section>
            </header>
        </>
    )
}

export default Remove