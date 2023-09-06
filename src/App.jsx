import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import './App.css'

const url = "https://pokeapi.co/api/v2/pokemon/charmander"

function App() {
  const { isLoading, isError, error, data, status } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => {
      return axios.get(url)
    }
  })

  if (isLoading) return <h3>Loading...</h3>
  if (isError) return <h3>Error! {error.message}</h3>

  console.log(data)
  return (
    <>
      Nombre del pokemon: {data.data.name}
    </>
  )
}

export default App
