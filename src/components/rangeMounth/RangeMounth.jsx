import React from 'react';
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";


function RangeMounth(props) {

    
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
                    <span>Янв</span>
                    <span>Фев</span>
                    <span>Мар</span>
                    <span>Апр</span>
                    <span>Май</span>
                    <span>Июн</span>
                    <span>Июл</span>
                    <span>Авг</span>
                    <span>Сен</span>
                    <span>Окт</span>
                    <span>Ноя</span>
                    <span>Дек</span>
                </div>
            </div>
        </div>
        );

}

export default RangeMounth;
