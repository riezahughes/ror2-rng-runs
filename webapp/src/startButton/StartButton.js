import './StartButton.css';

const StartButton = (props) => {
    return(
        <button onClick={props.onClick} class="startButton">Generate</button>
    )
}

export default StartButton;