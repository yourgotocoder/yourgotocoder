import React from 'react'
import HomeNavbarComponent from './MainComponents/HomeNavbarComponent'

type Props = {}

const HomeMainContent = (props: Props) => {
  return (
    <div style={{color: "white", minHeight: "100vh"}}>
        <HomeNavbarComponent />
    </div>
  )
}

export default HomeMainContent