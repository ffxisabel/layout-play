import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/story.module.scss'

const Story = () => (
  <article>
      <h3><Link to="/article/">Article Headline</Link></h3>
      <div className={styles.image}></div>
      <p>Woff scratch the walls and meow go back to sleep owner brings food.</p>
  </article>
)

export default Story
