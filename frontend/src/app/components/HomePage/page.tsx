import React from 'react'
import HomePageHeader from './HomePageHeader/page'
import FileUploadSection from '../FileUploadSection/page'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HomePageHeader />
      <FileUploadSection />
    </div>
  )
}