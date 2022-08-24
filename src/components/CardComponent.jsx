import React from 'react';
const CardComponent=(props)=> {
    return (   <div className='CardComponent'>
    <img src={props.image}></img>
    <p className='p1'>{props.title}</p>
    <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur voluptas illum iusto tempora enim voluptates facilis hic quis delectus! Quibusdam tempore ipsam sunt et est temporibus eveniet consectetur ab?</p>
    <button>Go Anywhere</button>
</div> );
}

export default CardComponent;
 