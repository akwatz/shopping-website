import React from 'react';
import './CollectionItem.styles.scss';

const CollectionItem = ({ id, imageUrl, title, name, price }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        {console.log(imageUrl)}
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
