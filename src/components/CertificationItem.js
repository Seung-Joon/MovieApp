import React, { Component } from 'react'
import './CertificationItem.css'

const CertificationItem = ({title, content, imageUrl, authority, certificationId, acquisitionDate, expirationDate}) => {
    return(
        <div className="container">
            <div className="logo">
                <img src={imageUrl} className="logoImage"/>  
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="certificationId">
                <p>ID: {certificationId}</p>
            </div>
        </div>
    ); 
}

export default CertificationItem;