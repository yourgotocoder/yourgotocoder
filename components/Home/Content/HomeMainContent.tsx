import React from 'react'
import HomeNavbarComponent from '../../Common/Navigation/HomeNavbarComponent'

type Props = {}

const HomeMainContent = (props: Props) => {
  return (
    <div style={{color: "white", minHeight: "100vh"}}>
        <HomeNavbarComponent />
    </div>
  )
}

export default HomeMainContent