import {ICON__IMG} from "../images";

export default function NewTweet({content, onChangeTextInput, onTweet}){
    return(
        <div className="newtweet">
            <div className="newtweet__item">
                <img className="newtweet__icon" src={ICON__IMG}></img>
                <input onChange={onChangeTextInput} value={content}  className="newtweet__input" type='text' placeholder='What is hapenning?' />
            </div>
            <button className="newtweet__bth" onClick={onTweet}>Tweet</button>
        </div>
    )
}