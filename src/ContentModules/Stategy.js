import './ContentModules.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import StrategyPreview from './StrategyPreview.js';
import StrategyFibo from '../StrategyContent/StrategyFibo';
import StrategyTrendline from '../StrategyContent/StrategyTrendline';
import StrategyItems from './StrategyItems.js'
import { useState } from 'react';
const Strategy = (props) => {
    // initial states
    const [visibilityStrategyFibo,setVisibilityStrategyFibo] = useState(false);
    const [visibilityStrategyTrendline,setVisibilityStrategyTrendline] = useState(false);
    const [visibilityStrategyItems,setVisibilityStrategyItems] = useState(true);
    const [visibilityStrategyPreview,setVisibilityStrategyPreview] = useState(true);
    // state data to preview strategy text
    const {setPreviewText} = props;

    return ( 
        <div className='d-flex w-100 justify-content-center align-items-center flex-grow-1 '>
            {visibilityStrategyItems && <StrategyItems 
                                                        setPreviewText={setPreviewText} 
                                                        setVisibilityStrategyItems={setVisibilityStrategyItems} 
                                                        setVisibilityStrategyFibo={setVisibilityStrategyFibo}
                                                        setVisibilityStrategyTrendline={setVisibilityStrategyTrendline}
                                                        setVisibilityStrategyPreview={setVisibilityStrategyPreview}
                                        />}
            {visibilityStrategyFibo && <StrategyFibo/>}
            {visibilityStrategyTrendline && <StrategyTrendline/>}
        </div>

    )
}
export default Strategy 