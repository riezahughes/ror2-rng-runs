import './Portrait.css';

const CharacterPortrait = (props) => {
    if(!props.filtered){
        return(
        <div className="characterPortraitContainer characterSelected" onClick={(e) => {props.setFilter(props.value)}}>
            <div className="characterPortraitInnerContainer">
                <img src={props.image}/>
            </div>
            <div className="characterPortraitSelect">
                <div className="characterPortraitSelectInner">

                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="characterPortraitContainer" onClick={(e) => {props.setFilter(props.value)}}>
                <div className="characterPortraitInnerContainer">
                    <img src={props.image}/>
                </div>
            </div>
            )
    }
}

export default CharacterPortrait;
