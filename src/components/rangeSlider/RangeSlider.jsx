import React from 'react';
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";


function RangeSlider(props) {

    
    const [minValue, set_minValue] = useState(2015);
    const [maxValue, set_maxValue] = useState(2022);
    
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    
    return (
        <div className="multi-range-slider-black">
            <MultiRangeSlider
                min={2014}
                max={2024}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
            <div className='showYearAndMounth'>
                <div className='showContainer'>
                    <span>2014</span>
                    <span>2015</span>
                    <span>2016</span>
                    <span>2017</span>
                    <span>2018</span>
                    <span>2019</span>
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                </div>
            </div>
        </div>
        );



}

export default RangeSlider;
