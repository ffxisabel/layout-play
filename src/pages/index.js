import React from 'react'
import Link from 'gatsby-link'
import Story from '../components/story'
import StoryStacked from '../components/storyStacked'
import styles from '../styles/homepage.module.scss'

const IndexPage = () => (
  <div>
    <h1>Homepage</h1>
    <section className={styles.strap}>
      <StoryStacked />
      <StoryStacked />
      <div className={styles.listContainer}>
        <Story />
        <Story />
        <Story />
      </div>
    </section>
  </div>
)

export default IndexPage
