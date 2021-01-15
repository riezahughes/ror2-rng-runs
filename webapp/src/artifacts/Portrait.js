import './Portrait.css';

const ArtifactPortrait = (props) => {
    if(!props.filtered){
        return(
        <div className="artifactPortraitContainer artifactSelected" onClick={(e) => {props.setFilter(props.value)}}>
            <img src={props.image}/>
        </div>
        )
    }else{
        return(
            <div className="artifactPortraitContainer" onClick={(e) => {props.setFilter(props.value)}}>
                <img src={props.image}/>
            </div>
            )
    }
}

export default ArtifactPortrait;
