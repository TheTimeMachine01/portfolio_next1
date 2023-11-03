import React from 'react'
import Navbar from './Navbar/Navbar'

export default function PanelLayout({ children }) {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}
