import React from 'react'
// import prismicLogo from '../images/logo-prismic.svg'
import { Link } from 'gatsby'
import {roomsData} from './RoomsData.jsx';
import {retreatsData} from './RetreatData.jsx';

const SearchResults = ({searchedString,closeResults}) => {
    const searchInput = searchedString.toLowerCase();
    if(searchInput === ''){
        return null
    }
    const roomsResult = (roomsData.filter(room=>{
        if('rooms'.includes(searchInput)||
            room.name.toLowerCase().includes(searchInput) || 
          room.code.toLowerCase().includes(searchInput)){
            return room
        }
    }))
    const retreatResult = (retreatsData.filter(retreat=>{
        if('retreats'.includes(searchInput) ||
            retreat.title.toLowerCase().includes(searchInput) || 
          retreat.code.toLowerCase().includes(searchInput)){
            return retreat;
        }
    }))

    return (
    

  <div className='search-results-inner'>
      <div className="result-backdrop" onClick={()=>closeResults(searchedString)}></div>
      {(roomsResult && roomsResult.length > 0) ?
        <>
            <label>Rooms</label>
            <ul>
                <>
                    {roomsResult.map(room=><li>
                        <Link 
                            to={`/room/${room.code}/`} 
                            state={{pageData: room.nextPageData}} 
                            onClick={()=>closeResults(room.name.toLowerCase())}
                            >
                                {room.name.toLowerCase()}
                        </Link>
                        </li>)}
                </>
            </ul>
        </>
        :
        null
      }

      {(retreatResult && retreatResult.length > 0) ?
        <>
            <label>Retreats</label>
            <ul>
                <>
                    {retreatResult.map(retreat=><li>
                        <Link 
                            to={`/retreat/${retreat.code}/`} 
                            state={{pageData: retreat.nextPageData}} 
                            onClick={()=>closeResults(retreat.title.toLowerCase())}
                            >
                                {retreat.title.toLowerCase()}
                        </Link>
                        </li>)}
                </>
            </ul>
        </>
        :
        null
      }
      {retreatResult.length == 0 && roomsResult.length == 0 ? 
      <p>No Results</p>:null}
  </div>
)
}

export default SearchResults
