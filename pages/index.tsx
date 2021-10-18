import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ClientListItem from '../components/Features/ClientList/ClientListItem/ClientListItem'
import Footer from '../components/UI/Footer/Footer'
import TopNav from '../components/UI/TopNav/TopNav'
import styles from '../styles/pages/ClientList.module.scss'

enum filterTypes {
  ALL = 'all',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

function index() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(filterTypes.ALL);

  useEffect(() => {
    // API call for list of sites
  }, [])

  useEffect(() => {
    // TODO: Clean up.
    if (filter === filterTypes.ALL) {
      // API call for list of sites
    }
    if (filter === filterTypes.NEWEST) {
      // API call for newest added sites
    }
    if (filter === filterTypes.NEWEST) {
      // API call for oldest added sites
    }
  }, [filter])

  return (
    <div className={styles.container}>
    <Head>
      <title>SiteSec Client Dashboard</title>
      <meta name="description" content="SiteSec's client dashboard" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    

    <TopNav />
    <div className={styles.banner}>
    Sites
    </div>
    <div className={styles.optionsBar}>
      <div>Filter</div>
      <div>Search</div>
    </div>
    {/* TODO: Componentize? */}
    <div className={styles.list}>
      {[...Array(10)].map((_, i) => {
          return (
            // TODO: Key = ID
            <ClientListItem key={i}/>
          )
        })
      }
      <div>PAGINATION 1 2 3 4 5</div>
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default index
