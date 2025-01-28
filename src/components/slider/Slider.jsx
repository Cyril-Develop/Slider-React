import './slider.css';
import chevronLeft from '/src/image/chevron-left.svg';
import chevronRight from '/src/image/chevron-right.svg';
import image1 from '/src/image/img1.jpg';
import image2 from '/src/image/img2.jpg';
import image3 from '/src/image/img3.jpg';
import image4 from '/src/image/img4.jpg';
import { useEffect, useState } from 'react';

export default function Slider() {
    
    const [index, setIndex] = useState(0);

    const imageSlider = [
        image1, 
        image2, 
        image3, 
        image4
    ];

    const nextSlide = () => {
        setIndex(index + 1);
        if(index === imageSlider.length - 1){
            setIndex(0);
        };
    };

    const previousSlide = () => {
        setIndex(index - 1);
        if(index === 0){
            setIndex(imageSlider.length - 1);
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='slider'>
            <div 
                className="slideshow" 
                style={{backgroundImage : `url(${imageSlider[index]})`}}>
                <img 
                    className='btn-left' 
                    src={chevronLeft} 
                    alt="button left" 
                    onClick={previousSlide}
                />
                <img 
                    className='btn-right' 
                    src={chevronRight} 
                    alt="button right" 
                    onClick={nextSlide}
                />   
            </div>
            <div className="show">
                <img 
                    src={imageSlider[0]} 
                    alt="" 
                    onClick={() => setIndex(0)} 
                    className={index === 0 ? 'active' : ''}
                />
                <img 
                    src={imageSlider[1]} 
                    alt="" 
                    onClick={() => setIndex(1)} 
                    className={index === 1 ? 'active' : ''}
                />
                <img 
                    src={imageSlider[2]} 
                    alt="" 
                    onClick={() => setIndex(2)} 
                    className={index === 2 ? 'active' : ''}
                />
                <img 
                    src={imageSlider[3]} 
                    alt="" 
                    onClick={() => setIndex(3)} 
                    className={index === 3 ? 'active' : ''}
                />
            </div>
        </div>
    )
}
