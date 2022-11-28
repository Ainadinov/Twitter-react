import { ELON__IMG } from "../images";
import {TOKAEV__IMG} from "../images";
import Tweet from "./Tweet";


export default function TweetLists(){
    const tweets =[
        {
            id: 0,
            authorName: 'Elon Musk',
            authorUsername: '@elonmusk',
            img: ELON__IMG,
            content: 'Tesla team just completed a 500 mile drive with a Tesla Semi weighing in at 81,000 lbs!',
            replies:200,
            retweets: 1000,
            likes:500,
        },
        {
            id: 1,
            authorName: 'Elon Musk',
            authorUsername: '@elonmusk',
            img: ELON__IMG,
            content:'The amount of pro psy ops on Twitter is ridiculous! At least with new Verified they will pay $8 for the privilege haha.',
            replies:300,
            retweets: 2000,
            likes:400,
        },
        {
            id: 2,
            authorName: 'President Kassym-Jomart Tokayevs Press Office',
            authorUsername: '@AkordaPress',
            img: TOKAEV__IMG,
            content: 'Президент Ресей Үкіметінің төрағасы Михаил Мишустинмен кездесті ',
            replies:500,
            retweets: 3000,
            likes:700,
        },
    ]
    
    return(
        
        tweets.map((tweet, index)=> <Tweet {...tweet} key={index} />)
    )
}