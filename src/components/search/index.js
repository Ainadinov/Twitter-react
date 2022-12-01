import React from "react";
import { SEARCH__ICON } from "../images";
import { MORE__TRENDS } from "../images";

// SearchTweetsByContent = (e) => {
//     this.setState({ 
//         filter: e.target.value 
//     });
//   };

// const lowercasedFilter = filter.toLowerCase();
// const filteredTweet = content.filter(item =>content.toLowerCase().includes(lowercasedFilter));

// filter(tweet =>tweet.content.toLowerCase().includes(lowercasedFilter)).  lowercasedFilter
// lowercasedFilter={lowercasedFilter}


class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            filter: "",
            trends: [
                {
                    id: 0,
                    trending: 'Trending in Kazakhstan',
                    title: 'Kazakhstan',
                    tweets: '2,500 Tweets',
                },
                {
                    id: 1,
                    trending: 'Music · Trending',
                    title: '#DimashQudaibergen',
                    tweets: '2500k Tweets',
                },
                {
                    id: 2,
                    trending: 'Business & finance · Trending',
                    title: '#NFTCommunity',
                    tweets: '500K Tweets',
                },
                {
                    id: 3,
                    trending: 'Music · Trending',
                    title: 'Hobi',
                    tweets: '4,500 Tweets',
                },
                {
                    id: 4,
                    trending: 'Trending in Political figures',
                    title: 'John Kennedy',
                    tweets: '3,300 Tweets',
                },
                {
                    id: 5,
                    trending: 'nFactorial',
                    title: ' nFactorial Web Batch 27',
                    tweets: '3.9M Tweets',
                },
                {
                    id: 6,
                    trending: 'World Cup FIFA2022',
                    title: 'Qatar',
                    tweets: '250k Tweets',
                },
                {
                    id: 7,
                    trending: 'Music streaming service · Trending',
                    title: 'Spotify',
                    tweets: '5,500 Tweets',
                },
                {
                    id: 8,
                    trending: 'Football',
                    title: 'Messi',
                    tweets: '2,3M Tweets',
                },
                {
                    id: 9,
                    trending: 'Trending in Kazakhstan',
                    title: 'Green Friday',
                    tweets: '9,500 Tweets',
                },
            ]
        }
    }

    SearchChange = (e) => {
        this.setState({ filter: e.target.value });
      };

    render(){
        const {trends, filter} = this.state;
        const lowercasedFilter = filter.toLowerCase();

        return(
            <div className="search">
                <div className="search__bth">
                    <div className="search__icon">{SEARCH__ICON}</div>
                    <input value={filter} onChange={this.SearchChange}  className="search__text" type="text" name="search" placeholder="Search Twitter"></input>
                </div>
                
                <div className="trends">
                         <p className="trends__for"> Trends For  You</p> 
                {trends.filter(item =>item.title.toLowerCase().includes(lowercasedFilter)).map((item)=> 
                    <div className="trends__list">
                        <div>
                            <p >{item.trending}</p>
                            <p className="trends__title">{item.title}</p>
                            <p >{item.tweets}</p>
                        </div>
                        <div className="trends__bth">
                            {MORE__TRENDS}
                        </div>
                    </div>)}  
                 </div>   
            </div>
        )
    }
   
}

export default Search;