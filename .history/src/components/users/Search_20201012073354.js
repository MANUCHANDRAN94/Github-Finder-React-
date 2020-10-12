import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form action='' className='form'>
          <input
            type='text'
            name='text'
            placeholder='search Users...'
            value={this.state.text}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
