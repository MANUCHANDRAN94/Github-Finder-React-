import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form action='' className='form'>
          <input type='text' name='text' placeholder='search Users...' />
        </form>
      </div>
    );
  }
}

export default Search;
