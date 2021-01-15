import './Tooltip.css';

const Tooltip = (props) => {


    if(props.display){
        return(
            <div className="tooltipHover" style={{top: props.mouseY + 10, left: props.mouseX +10}}>
                <div className="tooltipTitleContainer">
                    <h3>{props.title}</h3>
                </div>
                <div className="tooltipDescriptionContainer">
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }

}

export default Tooltip;
