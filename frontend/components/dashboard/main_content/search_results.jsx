import React from 'react';
import SongListContainer from './song_list_container';

const SearchResults = ({songs, query}) => {
  const title = (query === "") ?
    "Sorry, no search results to display " :
    (songs.length === 0) ?
    `Sorry, no search results for "${query}"` :
    `Search results for "${query}"`;

  return (
    <div className="stream">
      <nav className="user-subnav">
        <ul className="subnav-left">
          <li>{`${title}`}</li>
        </ul>
      </nav>

      <SongListContainer user={0}
        songs={songs} />

    </div>
  );
};


export default SearchResults;
