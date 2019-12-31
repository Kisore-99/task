import React from 'react';
import tileData from './tileData';
import './GridOne.css';

export default function TitlebarGridList() {


  return (
    <div>
        <div class="container">
            <div class="img-grid">
               {
                  tileData.map(tile=>(
                    <div>
                    <img src={tile.img} style={{height: '350px', width: '278px'}} />
                    <h4>{tile.title}</h4>
                  </div>
                  ))
               }
                
            </div>
          </div>
    </div>
  );
}