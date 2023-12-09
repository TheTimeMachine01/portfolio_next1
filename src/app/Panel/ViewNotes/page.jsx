import React from 'react'
import TableComponent from './TableComponent'


const dummyData = [
  { id:'1', name: 'John doe', date: '2023-11-16' },
  { id:'2', name: 'John doe', date: '2023-11-16' },
]

export default function Page() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center z-20">
        <div className="w-screen pl-40">
          <TableComponent data={ dummyData } />
        </div>
      </section>
    </>
  )
}