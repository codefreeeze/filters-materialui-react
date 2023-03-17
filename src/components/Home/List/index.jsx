import React from 'react';
import ListItem from './ListItem';
import './styles.css';


function List  ({ list })  {
  

  return(
    
    <div className='row' style={{justifyContent:"space-around"}}>
      
      {list.map((item) => (
        <ListItem key={item.id} item={item} />

      ))}

    </div>
  
  )

}



export default List;
