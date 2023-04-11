import React from 'react'
import data from '../data.js'

export default function Card(props){
    console.log(props.item.id)
    
    function horizontalRule(props){
        if (props.item.id > 1) {
            return <hr color="lightgray"/>
        }
    }
     
    return (
        <div className='card--container'>
        
            {horizontalRule(props)}
            
            <div className='card--container-inner'>
                <img src={props.item.imageUrl} className='card--photo'/>
                
                <div className='card--info'>
                    <div className='card--country-location'>
                        <img src='../images/destination.png' />
                        <h6 className='card--country'>{props.item.location}</h6>
                        <p className='card--google' >
                            <a href={props.item.googleMapsUrl} className="goog">View on Google Maps</a>
                        </p>
                    </div>
                    <h1 className='card--title'>{props.item.title}</h1>
                    <p className='card--start-end'> {props.item.startDate} - {props.item.endDate} </p>
                    <p className='card--description'> {props.item.description} </p>   
                </div>
            </div>
            
        </div>
    )
}

