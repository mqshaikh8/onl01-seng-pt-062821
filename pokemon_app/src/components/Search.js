import React from "react";

function Search(props) {
  const {term, searchFunc} = props

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={term} onChange={(e) => searchFunc(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
