import React from 'react'
import NavbarComponent from '../Common/Navigation/NavbarComponent'
import AboutMeContent from './AboutMeContent'

type Props = {}

const AboutMeComponent = (props: Props) => {
  return (
    <>
        <NavbarComponent/>
        <AboutMeContent/>
    </>
  )
}

export default AboutMeComponent