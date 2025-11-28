import React, { useState } from 'react'

const Fetch = () => {
  const [data, setData] = useState(null)

  async function fetchData() {
    const api = 'https://randomuser.me/api/'
    const response = await fetch(api)
    const fetched = await response.json()
    console.log(fetched)
    setData(fetched.results[0])
  }

  return (
    <>
      <button onClick={fetchData}>Get Data</button>
      {data ? (
        <>
          <h2>{data.name.first} {data.name.last}</h2>
          <img src={data.picture.large} alt="User" />
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </>
      ) : (
        <h3>No Data Loaded</h3>
      )}
    </>
  )
}

export default Fetch
