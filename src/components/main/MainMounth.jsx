import React from 'react';
import RangeMounth from '../rangeMounth/RangeMounth';
import {Link} from "react-router-dom";


function MainMounth(props) {
    
    return (
        <div className='container'>
            <div className='sg'>Слайдер года</div>
            <div className='switcher'>
                <Link to="/">
                    <button className='yearBtn'>Все года</button>
                </Link>
                <br />
                <button className='mounthBtn'>Месяца</button>
            </div>
            <RangeMounth/>
        </div>
    );
}

export default MainMounth;