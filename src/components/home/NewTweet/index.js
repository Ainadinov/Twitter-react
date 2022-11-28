import { ELAN__IMG} from "../images";
import {ICON__IMG} from "../images";
import {TOKAEV__IMG} from "../images";

export default function NewTweet(){
    return(
        <div className="newtweet">
            <img className="newtweet__icon" src={ICON__IMG}></img>
            <input className="newtweet__input" type='text' placeholder='What is hapenning?' />
        </div>
    )
}