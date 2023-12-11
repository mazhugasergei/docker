import { useEffect, useState } from "react"

export const App = () => {
  const [data, setData] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000")
      .then(res => res.json())
      .then(data => setData(data.ok))
  }, [])

  return (
    <>
      { data }
    </>
  )
}