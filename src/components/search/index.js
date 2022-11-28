import { SEARCH__ICON } from "../images";

function Search(){
    return(
        <div className="search">
            <div className="search__icon">{SEARCH__ICON}</div>
            <input className="search__text" type="text" name="search" placeholder="Search Twitter"></input>
        </div>
    )
}

export default Search;