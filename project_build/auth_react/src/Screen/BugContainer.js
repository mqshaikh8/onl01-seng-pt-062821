import React from 'react'
import Bug from '../components/Bug'

export default function BugContainer(props) {
    const {bugs} = props
    const handleBugRender = () => bugs.map(bug => <Bug key={bug.id} bug={bug}/>)
    return (
        <div>
            <p>Bug Container</p>
            {handleBugRender()}
        </div>
    )
}
