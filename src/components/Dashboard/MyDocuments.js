import React from 'react'
import document from '../../assets/document.png'

const MyDocuments = () => {
    return (
        <div className='MainDash'>
            <h1>My Documents</h1>
            <img className='document' src={document} alt="" />
        </div>
    )
}

export default MyDocuments