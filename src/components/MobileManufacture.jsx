import React from 'react';
const MobileManufacture=()=> {
    const arr=['Samsung',"HTC","Micromax","Apple"];
    return ( <div>
        <h2>Mobile Manufacturers</h2>
       <ul>
           {arr.map((item)=>
               <li>{item}</li>
           )}
       </ul>
      </div> );
}

export default MobileManufacture;
