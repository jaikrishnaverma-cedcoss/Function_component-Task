import React from 'react';
const MobileOs=()=> {
    const arr=['Android',"Blackberry","iPhone","Windows Phone"];
    return (   <div>
        <h2>Mobile Operating System</h2>
       <ul>
           {arr.map((item)=>
               <li>{item}</li>
           )}
       </ul>
      </div> );
}

export default MobileOs;
