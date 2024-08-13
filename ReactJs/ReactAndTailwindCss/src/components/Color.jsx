import React from 'react'

function Color(props) {
    return (
      <>
        <div className={`ml-4 w-16 h-7 text-${props.color}-400  bg-${props.color}-400 `}>
          <h3>{props.color}</h3>
        </div>
      </>
    );
  }
  

export default Color;