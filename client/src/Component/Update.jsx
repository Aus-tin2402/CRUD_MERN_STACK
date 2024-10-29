import React, { useState } from 'react'
import './Css/update.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const navigate=useNavigate();
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const HandleSubmit=async(e)=>{
        e.preventDefault();
        const formData = {
            name,
            dob,
            email,
            contact: Number(contact),
            password,
            address
        };

        try {
            let response=await axios.patch(`http://localhost:4024/crud/Application/updateall/${ID}`,formData,{
                headers:{'content-type':'application/json'}
            })
            navigate(`/getAll`)
            
        } catch (error) {
            window.alert(`Error -> ${error}`)
        }
    }
    return (
        <>
            <header className="update" id="update">
                <div className="title">
                    <h1>Update Page</h1>
                </div>
                <section className="update-form">
                <div className="container">
                    <form onSubmit={(e)=>HandleSubmit(e)}>
                        <div className="input-group-feild">
                            <label htmlFor="user_id">Enter Your User ID:</label>
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
                        <div className="input-group-feild">
                            <label htmlFor="name">Enter Your Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Enter Your Name:'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group-feild">
                            <label htmlFor="dob">Enter Your Date-Of-Birth:</label>
                            <input
                                type="date"
                                id='dob'
                                name='dob'
                                placeholder='Enter Your Date-Of-Birth:'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group-feild">
                            <label htmlFor="email">Enter Your Email Id:</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Enter Your Email Id:'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group-feild">
                            <label htmlFor="contact">Enter Your Contact Number:</label>
                            <input
                                type='text'
                                id='contact'
                                name='contact'
                                placeholder='Enter Your Contact Number:'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group-feild">
                            <label htmlFor="password">Enter Your Password:</label>
                            <input
                                id='password'
                                name='password'
                                type="password"
                                placeholder='Enter Your Password:'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group-feild">
                            <label htmlFor="address">Enter Your Address:</label>
                            <input
                                id='address'
                                name='address'
                                placeholder='Enter Your Address:'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type='text'
                            />
                        </div>
                        <div className="button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                </section>
            </header>
        </>
    )
}

export default Update
