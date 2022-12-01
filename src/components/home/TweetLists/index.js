import Tweet from "./Tweet";


export default function TweetLists({tweets, deleteTweet, lowercasedFilter }){
    return(
        tweets.filter(item =>item.content.toLowerCase().includes(lowercasedFilter)).map((tweet)=> <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />)
    )
}