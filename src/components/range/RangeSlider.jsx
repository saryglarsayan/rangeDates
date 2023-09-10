import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";


function RangeSlider(props) {
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);
    const [minValue2, setMinValue2] = useState(0);
    const [maxValue2, setMaxValue2] = useState(0);

return (
	<div className="App">
		<MultiRangeSlider
		baseClassName="multi-range-slider-black"
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          onChange={(e) => {
            setMinValue2(e.minValue);
            setMaxValue2(e.maxValue);
          }}
		/>
	</div>
	);
}

export default RangeSlider;