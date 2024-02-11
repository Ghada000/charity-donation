import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import ReactPlayer from 'react-player';

function Hair() {
    const [data, setData] = useState([]);
    const [clickedPicture, setClickedPicture] = useState(null);

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

    const handlePictureClick = (title) => {
        if (clickedPicture === title) {
            setClickedPicture(null);
        } else {
            setClickedPicture(title);
        }
    }

    return (
        <div className='cc'>
            <h2 className='titre'>Step-by-Step Guide</h2>
            <h3 className='soustitre'>Attention Superhairoes! Below you will find a simple four-step guide to show you the perfect way to give Hair and Hope to children and young people with cancer.</h3>

            {data.map((item, index) => (
                <div key={item.donation_id} className='step-container'>
                    <h3 className='video'>{item.video_description}</h3>
                    <div className='video-container'>
                        <ReactPlayer
                            url={item.video_url.replace("watch?v=", "embed/")}
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='step'>
                        <p className='par'>Step 1</p>
                        <img
                            className='image'
                            src={item.picture1_image_url}
                            alt={item.picture1_title}
                            onClick={() => handlePictureClick(item.picture1_title)}
                        />
                        {clickedPicture === item.picture1_title && (
                            <div>
                                <p>{item.picture1_description}</p>
                            </div>
                        )}
                    </div>
                    <div className='step'>
                        <p className='par'>Step 2</p>
                        <img
                            className='image'
                            src={item.picture2_image_url}
                            alt={item.picture2_title}
                            onClick={() => handlePictureClick(item.picture2_title)}
                        />
                        {clickedPicture === item.picture2_title && (
                            <div>
                                <p>{item.picture2_description}</p>
                            </div>
                        )}
                    </div>
                    <div className='step'>
                        <p className='par'>Step 3</p>
                        <img
                            className='image'
                            src={item.picture3_image_url}
                            alt={item.picture3_title}
                            onClick={() => handlePictureClick(item.picture3_title)}
                        />
                        {clickedPicture === item.picture3_title && (
                            <div>
                                <p>{item.picture3_description}</p>
                            </div>
                        )}
                    </div>
                    <div className='step'>
                        <p className='par'>Step 4</p>
                        <img
                            className='image'
                            src={item.picture4_image_url}
                            alt={item.picture4_title}
                            onClick={() => handlePictureClick(item.picture4_title)}
                        />
                        {clickedPicture === item.picture4_title && (
                            <div>
                                <p>{item.picture4_description}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hair;
