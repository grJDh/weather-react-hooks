import React from 'react';

const SearchBox = props => {

  return (
    <div className='tc'>
      <input type='search' placeholder='Enter city here' onKeyPress={props.updateCity}
        className='h2 f4 lh-copy bg-near-white shadow-1 mb4 ba'
      />
    </div>
  );
}

export default SearchBox;