import { useState, useEffect } from 'react'
import InfoList from '../components/InfoList'
const Home = () => {
  const myRequest = new Request('https://api.github.com/repos/facebook/react/issues')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setData(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>

      {
            data.map((item) => (
              <InfoList key={item.id} {...item} />
            ))
        }
    </div>
  )
}

export default Home
