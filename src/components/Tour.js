import React from 'react'

const Tour = ({ image, date, title, text, location, duration, cost }) => {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={image} class="tour-img" alt="" />
        <p class="tour-date">{date}</p>
      </div>
      <div class="tour-info">
        <div class="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
