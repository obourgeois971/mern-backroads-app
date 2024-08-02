import React from 'react'
import { socialLink } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer class="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul class="footer-icons">
        {socialLink.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
