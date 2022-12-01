import { COMMENT__ICON } from "../images";
import { RETWEET__ICON } from "../images";
import { LIKE__ICON } from "../images";
import { EXPORT__ICON } from "../images";
import { DELETE } from '../images';

export default function Tweet({tweet, deleteTweet}){
    return(
        <div className="tweet">
            <p className="tweet__text"> You might like! <span> See More</span></p>

            <div className="tweet__user">
                <img className="newtweet__icon" src={tweet.img}></img>
                <div className="tweet__content">
                    <p className="tweet__author">{tweet.authorName} <span>{tweet.authorUsername} </span></p>
                    <p >{tweet.content}</p>
                </div>
                <button onClick={()=>deleteTweet(tweet.id)}  style={{width: 35, height: 35, border:'none', backgroundColor:'transparent'}}>       
                    {DELETE}
                </button>
            </div>
            <div className="tweet__icon">
                
                <div className="tweet__icon-item">
                    <div>{COMMENT__ICON}</div>
                    <p>{tweet.replies}</p>
                </div>
                <div className="tweet__icon-item">
                    <div>{RETWEET__ICON}</div>
                    <p>{tweet.retweets}</p>
                </div>
                <div className="tweet__icon-item">
                    <div>{LIKE__ICON}</div>
                    <p>{tweet.likes}</p>
                </div>
                <div className="tweet__icon-item">
                    <div>{EXPORT__ICON}</div>
                </div>
        
            </div>
        </div>
    )
}