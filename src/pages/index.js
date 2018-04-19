import React from 'react'
import Link from 'gatsby-link'
import Story from '../components/story'
import styles from '../styles/homepage.module.scss'

const IndexPage = () => (
  <div>
    <h1>Homepage</h1>
    <section className={styles.strap}>
      <Story />
      <Story />
      <Story />
      <Story />
    </section>
  </div>
)

export default IndexPage
