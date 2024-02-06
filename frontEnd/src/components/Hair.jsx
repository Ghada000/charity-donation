import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactPlayer from 'react-player'

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
        <div>
            <h2>Step-by-Step Guide</h2>
            <h3>Attention Superhairoes! Below you will find a simple four-step guide to show you the perfect way to give Hair and Hope to children and young people with cancer.</h3>

            {data.map((item) => (
                <div key={item.donation_id}>
                    <h3>{item.video_description}</h3>
                    <iframe 
                        width="560" 
                        height="315" 
                        src={item.video_url.replace("watch?v=", "embed/")} 
                        title="Hair Donation Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <p>{item.picture1_title}: {item.picture1_description}</p>
                    <img src={item.picture1_image_url} alt={item.picture1_title} />
                    <p>{item.picture2_title}: {item.picture2_description}</p>
                    <img src={item.picture2_image_url} alt={item.picture2_title} />
                    <p>{item.picture3_title}: {item.picture3_description}</p>
                    <img src={item.picture3_image_url} alt={item.picture3_title} />
                    <p>{item.picture4_title}: {item.picture4_description}</p>
                    <img src={item.picture4_image_url} alt={item.picture4_title} />
                    <p>{item.picture5_title}: {item.picture5_description}</p>
                    <img src={item.picture5_image_url} alt={item.picture5_title} />
                </div>
            ))}
        </div>
    );
}

export default Hair;
