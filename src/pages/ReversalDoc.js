import React from 'react'
import RVDNavbar from '../components/ReversalDoc/RVDNavbar'
import RVDFormTabs from '../components/ReversalDoc/RVDFormTabs'
import RVDTable from '../components/ReversalDoc/RVDTable'

const ReversalDoc = () => {
  return (
    <div className="font-roborto shadow-sm">
    <RVDNavbar />
    <main className="p-3 ">
      <div className="border-box mt-3">
        <RVDFormTabs />
      </div>
      <div className="border-box mt-3">
        <RVDTable/>
      </div>
    </main>
  </div>
  )
}

export default ReversalDoc