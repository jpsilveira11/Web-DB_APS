import { useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  useEffect(() => {
    axios.get('http://localhost:5174/api')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
    </>
  )
}

export default App

