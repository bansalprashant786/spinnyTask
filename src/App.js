import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchCards, loadMoreCards } from './action';
import Card from './card';
import './App.css';

let page = 1;

const App = ({ fetchCards, cardsInfo, loadMoreCards })  => {
  const [value, setvalue] = useState('');

  const handleChange = (event) => {
    setvalue(event.target.value);
  }

  const handleSubmit = () => {
    fetchCards(value, page)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSubmit();
    }
  }

  const handleLoadMore = () => {
    page+=1;
    loadMoreCards(value, page)
  }

  return (
    <div className='App'>
      <header className='flex'>
        <input
          type='text'
          className='wfull'
          placeholder='search'
          onChange={handleChange}
          value={value}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>Go</button>
      </header>
      <div className='flex flexWrap flexStart pt100'>
        {
          cardsInfo.map(cardData => <Card cardData={cardData} key={cardData.mal_id} />)
        }
      </div>
      {
        cardsInfo.length ?
          <div className='flex justifyCenter'>
            <button className='load-more-btn' onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        : null
      }
    </div>
  );
}
export default connect(
  state=>({
    cardsInfo: state.data
  }),
  {
    fetchCards, loadMoreCards
  }
)(App);
