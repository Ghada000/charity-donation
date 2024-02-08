import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import reacPlayer from 'react-player'
import '../App.css'

function Hair() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5000/hair/getAll')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        
        <div className='cc'>
    <h2 className='titre'>Step-by-Step Guide</h2>
    <h3 className='soustitre'>Attention Superhairoes! Below you will find a simple four-step guide to show you the perfect way to give Hair and Hope to children and young people with cancer.</h3>

    {data.map((item, index) => (
        <div key={item.donation_id} className='step-container'>
            <h3 className='video'>{item.video_description}</h3>
            <div className='video-container'>
                <iframe 
                    className='video-iframe'
                    src={item.video_url.replace("watch?v=", "embed/")} 
                    title="Hair Donation Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
            <div className='step'>
                <p className='par'>{item.picture1_title}: {item.picture1_description}</p>
                <img className='image' src={item.picture1_image_url} alt={item.picture1_title} />
               
            </div>
            <div className='step'>
                <p className='par'>{item.picture2_title}: {item.picture2_description}</p>
                <img className='image' src={item.picture2_image_url} alt={item.picture2_title} />
               
            </div>
            <div className='step'>
                <p className='par'>{item.picture3_title}: {item.picture3_description}</p>
                <img className='image' src={item.picture3_image_url} alt={item.picture3_title} />
               
            </div>
            <div className='step'>
                <p className='par'>{item.picture4_title}: {item.picture4_description}</p>
                <img className='image' src={item.picture4_image_url} alt={item.picture4_title} />
               
            </div>
        
    
        </div>
    ))}
</div>

      
    );
}

export default Hair;
