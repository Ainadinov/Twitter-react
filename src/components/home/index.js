import NewTweet from "./NewTweet";
import TweetLists from "./TweetLists";

function Home(){
    return(
        <div className="home">
            <p className="home__text"> 
                Home
            </p>
            <NewTweet/>
            <TweetLists/>
        </div>
        
    )
}

export default Home;