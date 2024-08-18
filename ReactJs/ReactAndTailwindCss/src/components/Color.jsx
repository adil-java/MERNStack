import React from 'react'

function Color(props) {
    return (
      <>
        <div className={`ml-4 w-16 h-7 rounded-lg `}
        style={{backgroundColor:`${props.color}`}}>
          <h3>{props.color}</h3>
        </div>
      </>
    );
  }
  

export default Color;