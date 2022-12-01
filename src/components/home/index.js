import React from "react";
import { ELON__IMG,  } from "./images";
import { TOKAEV__IMG } from "./images";
import NewTweet from "./NewTweet";
import TweetLists from "./TweetLists";
import { ICON__IMG } from "./images";


class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            content: '',
            filter: '',
            tweets: [
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
        }
    }

    onChangeTextInput = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Adlet',
            authorUsername: '@adletainadin',
            img: ICON__IMG,
            content: this.state.content,
            replies: 0,
            retweets: 0,
        }

        this.setState({
            tweets: [...this.state.tweets, newTweet ],
            content: ''
        })
    }

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    SearchChange = (e) => {
        this.setState({ filter: e.target.value });
      };


    render(){

        const {tweets, content, filter } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        return(
                <div className="home">
                    <p className="home__text"> 
                        Home
                    </p>
                    <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
                    <input value={filter} onChange={this.SearchChange}  className="search__tweet" type="text" name="search" placeholder="Search Tweet"></input>
                    {/* фильтрованный поиск по твиту и трендового твита отдельно сделал */}
                    <TweetLists tweets={tweets}  lowercasedFilter={lowercasedFilter} deleteTweet={this.deleteTweet} />
                </div>
            
        )
    }
}


export default Home;