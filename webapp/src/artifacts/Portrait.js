import './Portrait.css';

const ArtifactPortrait = (props) => {
    if(!props.filtered){
        return(
        <div
        className="artifactPortraitContainer artifactSelected"
        onClick={(e) => {props.setFilter(props.value)}}
        onMouseEnter={(e) => {props.mouseIn(props.title, props.description)}}
        onMouseLeave={(e) => {props.mouseOut()}}
        >
            <img src={props.image}/>
        </div>
        )
    }else{
        return(
            <div
            className="artifactPortraitContainer"
            onClick={(e) => {props.setFilter(props.value)}}
            onMouseEnter={(e) => {props.mouseIn(props.title, props.description)}}
            onMouseLeave={(e) => {props.mouseOut()}}            
            >
                <img src={props.image}/>
            </div>
            )
    }
}

export default ArtifactPortrait;
