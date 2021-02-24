import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Book Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='History books include any books that lay out the known facts about a particular, time, culture, or event in history.'
              label='History'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The success of any great travel book can be measured not in awards, but in miles'
              label='Travel'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.'
              label='Thriller'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Love and friendship are two very strong feelings.'
              label='Friendship and Love'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Every child is a flower and two flowers can not be compared'
              label='Children'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;