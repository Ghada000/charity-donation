
// export default Home;
import React from 'react';
import './css/Home.css'
function Home() {
  return (
    <div>
    <div className='nimg'>
      <header  style={{ 
        
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/482/830/548/happiness-children-smile-heat-wallpaper-preview.jpg)", 
        backgroundSize: 'cover', 
        height: '673px',
        boxShadow: 'inset rgb(0, 0, 0) 0px 126px 494px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        
      }}>

      </header>
      <div className='bodyimg'>
        <h1>drstrjdtfkygliuhmiojpmhglfykutdjyrshdtkfylgumhijolkj</h1>
        <br/>
        
        <h4>hsks hxkxj xjxix xjkaxxl xakxal xaklm xaklmx xa,klmx xna,kl xa n,kl</h4>        
      </div>
    </div>
    <div>
      <h1>Top donaitors </h1>
      <div className='listDonation'>
      <div className='cardDonation'>
        <img  className='carddimg' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais" alt="" />
        <p className='NameDonation' >Badis Boughanmi</p >
        <p className='TopOne'> Top One </p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
