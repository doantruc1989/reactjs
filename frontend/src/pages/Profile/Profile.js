import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './profile.css'

const Profile = () => {
    const [profile, setProfile] = useState([])
    const id = (JSON.parse(localStorage.getItem("user"))).id;
    useEffect(() => {
        try {
            axios.get('http://localhost:3001/users/profile', id)
                .then((response) => {
                    setProfile(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (

        <div>
            {profile.map((view) => {
                return (
                    <div>
                        {view.username}
                    </div>
                )
            })}
        </div>
    )
}

export default Profile