import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
             <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "650px", width: "99%" }}
                        className=""
                        src="https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/hero_extended/public/socialprotection-3.jpg.webp?itok=vScY-hPj"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item> 
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "650px", width: "99%" }}
                        className=""
                        src="https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/media_large_image/public/socialprotection-2.jpg.webp?itok=NL9fML1X"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "650px", width: "99%" }}
                        className=""
                        src="https://www.unicef.org/tunisia/sites/unicef.org.tunisia/files/styles/media_large_image/public/socialprotection-1_0.jpg.webp?itok=3iOgTY2y"
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>

            {/* <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "373.53px" }}
                        className=""
                        src="https://outdoorishome.com/wp-content/uploads/2021/11/Hammocking-in-winter-e1636475924383.jpg"
                        alt="First slide"
                    />
                 
                </div>
            </Carousel.Item> */}
        </Carousel>
    )
}
export default Slider;