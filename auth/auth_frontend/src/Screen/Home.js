import React from 'react'

export default function Home(props) {
    const {user} = props
    console.log(user, 'props')
    return (
        <div>
            <p> {user.username ? `Welcome ${user.username}` : "Welcome Guest"}</p>
        </div>
    )
}
