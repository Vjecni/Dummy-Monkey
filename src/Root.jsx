import React from 'react'
import ReactDOM from 'react-dom/client'

import Index from './Index'
import './style.css'

const Root = () => {
  return (
    <>
        <Index />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)