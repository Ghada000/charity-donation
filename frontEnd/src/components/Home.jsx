
// export default Home;
import React from 'react';
import './css/Home.css'
import { FaMedal } from "react-icons/fa";
import data from '../data.json'

function Home() {
  return (
    <div>
    <div className='nimg'>
      <header  style={{ 
        
        backgroundImage: "url(https://static.ffx.io/images/$width_620%2C$height_349/t_crop_fill/q_86%2Cf_auto/e7ce6425ea128fb54abeb0b4e5191ef57e0944f0)", 
        backgroundSize: 'cover', 
        height: '673px',
        boxShadow: 'inset rgb(0, 0, 0) 0px 126px 494px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        
      }}>

      </header>
      <div className='bodyimg'>
        <h1 className='nnn'>Let's Build The World Together</h1>
        <br/>
        
        <h4></h4>        
      </div>
    </div>
    <div>
      <h1 className='donn'>Top donaitors </h1>
      <div className='listDonation'>
        {data.map((e,i)=>{
        return (   
          <div className='cardDonation'>
        <img  className='carddimg' src={e.img} alt="" />
        <p className='NameDonation' >{e.name}</p >
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
