import React from 'react'
import Navbar from './components/Navbar.js'
import Card from './components/Card.js'
import data from './data.js'

export default function App(){
    const card = data.map(info => {
        return (
            <Card 
            key= {info.id}
            item = {info} 
            />
        )
    })
        
    return (
        <div>
            <Navbar />
            <section className='card'>
                {card}
            </section>         
        </div>
    )
}