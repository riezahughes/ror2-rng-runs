import './Portrait.css';

const Portrait = (props) => {
    if(!props.filtered){
        return(
        <div className="portraitContainer selected" onClick={(e) => {props.setFilter(props.value)}}>
            <div className="portraitInnerContainer">
                <img src={props.image}/>
            </div>
            <div className="portraitSelect">
                <div className="portraitSelectInner">

                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="portraitContainer" onClick={(e) => {props.setFilter(props.value)}}>
                <div className="portraitInnerContainer">
                    <img src={props.image}/>
                </div>
            </div>
            )
    }
}

export default Portrait;
