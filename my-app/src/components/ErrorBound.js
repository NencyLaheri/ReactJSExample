import React from 'react'
import a from './a.jpeg'
import b from './b.jpg'
import ErrorBound1 from './ErrorBound1'

export default function ErrorBound() {
  return (
    <div>
      <ErrorBound1 i1={a}></ErrorBound1><br />
      <ErrorBound1 i1={b}></ErrorBound1><br />
      {/* <ErrorBound1 i1="NoImage"></ErrorBound1> */}
    </div>
  )
}
