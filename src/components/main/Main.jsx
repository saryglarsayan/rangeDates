import React from 'react';
import RangeSlider from '../rangeSlider/RangeSlider';
import {Link} from "react-router-dom";


function Main(props) {
    
    return (
        <div className='container'>
            <div className='sg'>Слайдер года</div>
            <div className='switcher'>
                <button className='yearBtn'>Все года</button>
                <br />
                <Link to="/mounth">
                    <button className='mounthBtn'>Месяца</button>
                </Link>
            </div>
            <RangeSlider/>
        </div>
    );
}

export default Main;