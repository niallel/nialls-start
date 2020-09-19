import React from 'react';
import './App.css';

import items from './items.json';

function App() {
  return (
    <div className="app">
      {items.map((item,index) => 
        <a href={item.url} key={index} className="item">
          <img className="image" src={
            'https://api.faviconkit.com/' +
            item.url.replace('http://','').replace('https://','').split(/[/?#]/)[0] +
            '/256'}
            alt={item.name}/>
            <div className="name">{item.name}</div>
        </a>
      )}

    </div>
  );
}

export default App;
