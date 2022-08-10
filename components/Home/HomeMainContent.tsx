import React from 'react'
import HomeNavbarComponent from './MainComponents/HomeNavbarComponent'
import ProfileSkills from './MainComponents/ProfileSkills'

type Props = {}

const HomeMainContent = (props: Props) => {
  return (
    <div style={{color: "white", minHeight: "100vh"}}>
        <HomeNavbarComponent />
        <ProfileSkills/>
    </div>
  )
}

export default HomeMainContent