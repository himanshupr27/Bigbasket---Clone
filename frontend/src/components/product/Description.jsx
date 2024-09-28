import React, { useState } from 'react';
import './Description.css';

const Description = ({ products }) => {
  const [expandedDiv, setExpandedDiv] = useState(null);

  const handleExpand = (index) => {
    setExpandedDiv(index === expandedDiv ? null : index);
  };

  return (
    <div className="description">
      <h5>{products.name}</h5>
      <div className="des-details">
        <div className="description-block">
          <div className="details-block-heading">
            <h6>About The Product</h6>
            <button onClick={() => handleExpand(1)}>
              {expandedDiv === 1 ? '-' : '+'}
            </button>
          </div>
          <p className={`details ${expandedDiv === 1 ? 'expanded' : ''}`}>
            {products.description} 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis magnam saepe cupiditate facilis alias! Ipsa officiis minima consequuntur, quia et expedita laboriosam nihil veniam repellendus! Placeat atque saepe accusantium nemo magni sequi odio illo facere, ex iure, totam, dolorum omnis at! Numquam id quidem ipsam aspernatur neque maiores consectetur dolorum, quae voluptates quaerat necessitatibus cupiditate consequatur labore veritatis reprehenderit itaque dignissimos provident at odio repudiandae! Eligendi maxime et nostrum laborum quas cupiditate eum omnis ab ad atque. Nisi saepe eum sequi aut accusamus nam itaque aperiam assumenda excepturi sed tempora labore maxime ullam totam et, explicabo beatae dolorem modi!
          </p>
        </div>
        <hr />
        <div className="description-block">
          <div className="details-block-heading">
            <h6>How to use</h6>
            <button onClick={() => handleExpand(2)}>
              {expandedDiv === 2 ? '-' : '+'}
            </button>
          </div>
          <p className={`details ${expandedDiv === 2 ? 'expanded' : ''}`}>
            {products.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis magnam saepe cupiditate facilis alias! Ipsa officiis minima consequuntur, quia et expedita laboriosam nihil veniam repellendus! Placeat atque saepe accusantium nemo magni sequi odio illo facere, ex iure, totam, dolorum omnis at! Numquam id quidem ipsam aspernatur neque maiores consectetur dolorum, quae voluptates quaerat necessitatibus cupiditate consequatur labore veritatis reprehenderit itaque dignissimos provident at odio repudiandae! Eligendi maxime et nostrum laborum quas cupiditate eum omnis ab ad atque. Nisi saepe eum sequi aut accusamus nam itaque aperiam assumenda excepturi sed tempora labore maxime ullam totam et, explicabo beatae dolorem modi!
          </p>
        </div>
        <hr />
        <div className="description-block">
          <div className="details-block-heading">
            <h6>Other Product Info</h6>
            <button onClick={() => handleExpand(3)}>
              {expandedDiv === 3 ? '-' : '+'}
            </button>
          </div>
          <p className={`details ${expandedDiv === 3 ? 'expanded' : ''}`}>
            {products.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis magnam saepe cupiditate facilis alias! Ipsa officiis minima consequuntur, quia et expedita laboriosam nihil veniam repellendus! Placeat atque saepe accusantium nemo magni sequi odio illo facere, ex iure, totam, dolorum omnis at! Numquam id quidem ipsam aspernatur neque maiores consectetur dolorum, quae voluptates quaerat necessitatibus cupiditate consequatur labore veritatis reprehenderit itaque dignissimos provident at odio repudiandae! Eligendi maxime et nostrum laborum quas cupiditate eum omnis ab ad atque. Nisi saepe eum sequi aut accusamus nam itaque aperiam assumenda excepturi sed tempora labore maxime ullam totam et, explicabo beatae dolorem modi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
