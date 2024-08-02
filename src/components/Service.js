import React from 'react'
import PropTypes from 'prop-types'

const Service = ({ icon, title, text }) => {
  return (
    <article class="service">
      <span class="service-icon">
        <i class={icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{title}</h4>
        <p class="service-text">{text}</p>
      </div>
    </article>
  )
}

Service.propTypes = {}

export default Service
