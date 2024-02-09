import React from 'react';
import './css/Home.css';
import { FaMedal } from "react-icons/fa";
import data from '../data.json';
import Slider from '../components/Slider'; // Import the Slider component

function Home() {
  return (
    <div>
      {/* Include the Slider component */}
      <Slider />

      <div className="childrenBoxes">
        {/* First child box */}
        <div className="childBox">
          <img src="https://images.unsplash.com/photo-1632923057155-dd35366509ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvb3J8ZW58MHx8MHx8fDA%3D" alt="Child 1" className="childImage" />
          <div className="childDescription">
            <h2>the future star</h2>
            <p>Bright boy, hopeful despite poverty. Dreams of school, friends, and food. Needs support to break free and pursue dreams.</p>
          </div>
        </div>
        {/* Second child box */}
        <div className="childBox">
          <img src="https://images.unsplash.com/photo-1518949142393-f1d68174c92a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vcnxlbnwwfHwwfHx8MA%3D%3D" alt="Child 2" className="childImage" />
          <div className="childDescription">
            <h2>the unbdeatable</h2>
            <p>Talented boy, ambitious despite hardship. Dreams of a brighter future. Needs support for education and growth.</p>
          </div>
        </div>
        {/* Third child box */}
        <div className="childBox">
          <img src="https://plus.unsplash.com/premium_photo-1682092588009-51eacb1d03ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvb3J8ZW58MHx8MHx8fDA%3D" alt="Child 3" className="childImage" />
          <div className="childDescription">
            <h2>the little super hero</h2>
            <p> a young child with a heart full of dreams, navigates through the hardships of poverty with unwavering optimism.</p>
          </div>
        </div>
        {/* Fourth child box */}
        <div className="childBox">
          <img src="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb3J8ZW58MHx8MHx8fDA%3D" alt="Child 4" className="childImage" />
          <div className="childDescription">
            <h2>the Ultra Trio</h2>
            <p>three boys facing poverty, share a common determination to overcome adversity and pursue their dreams. </p>
          </div>
        </div>
        {/* Add more child boxes as needed */}
      </div>

      <div>
        <h1 className='donn'>Top donors</h1>
        <div className='listDonation'>
          {data.map((e,i)=>{
            return (   
              <div className='cardDonation' key={i}>
                <img className='carddimg' src={e.img} alt="" />
                <p className='NameDonation'>{e.name}</p >
                <FaMedal fontSize={25} color='yellow'/>
                <div className='TopOne'>  </div>
                <p className='txtDonation'>{e.description} </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
