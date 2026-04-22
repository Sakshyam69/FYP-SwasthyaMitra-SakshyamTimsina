import React, { useContext, useEffect } from 'react'
import Headers from '../components/Header'
import HospitalMenu from '../components/HospitalMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { getDoctorsData } = useContext(AppContext)
  useEffect(() => {
    getDoctorsData()
  }, [])
  return (
    <div>
      <Headers />
      <HospitalMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home
