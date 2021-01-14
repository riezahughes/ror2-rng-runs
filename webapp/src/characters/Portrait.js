import './Portrait.css';
import { useState } from 'react';

function Portrait(props) {
    if(props.selected){
        return(
        <div className="portraitContainer selected">
            <div className="portraitInnerContainer">

            </div>
            <div className="portraitSelect">
                <div className="portraitSelectInner">
                    
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="portraitContainer">
                <div className="portraitInnerContainer">
    
                </div>
            </div>
            )
    }
}

export default Portrait;
