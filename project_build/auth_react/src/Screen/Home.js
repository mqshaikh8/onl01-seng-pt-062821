import {useEffect, useState} from 'react';
import BugContainer from './BugContainer';

import "../Css/Home.css"
export default function Home(props) {
    const {user} = props
    const [bugs, setBugs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/bugs')
        .then(res => res.json())
        .then(data =>{
            console.log(data, 'fetch')
            setBugs([...data])
            })
    },[])

    return (
        <div className="Home">
            <p> {user.username ? `Welcome ${user.username}` : "Welcome Guest"}</p>
            <div className="card_container" >
                <BugContainer bugs={bugs}/>
            </div>
        </div>
    )
}
