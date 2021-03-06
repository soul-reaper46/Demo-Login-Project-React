import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from "../../contexts/authContext.js";
import { useHistory } from "react-router-dom";

export default function Home() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {

        try {

            await logout()
            history.push('/login')

        } catch {
            alert("failed to logout")
        }
    }

    function handleUpdate() {

        history.push('/update-profile')
    }

    return (
        <div>

            <strong>Email: </strong>{currentUser.email}

            <Button onClick={handleUpdate}> Update Profile </Button>

            <Button onClick={handleLogout}> Log Out </Button>

        </div>
    )
}
