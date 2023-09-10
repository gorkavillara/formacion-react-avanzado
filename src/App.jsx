import { gql, useQuery } from "@apollo/client"
import "./App.css"

const GET_RICK = gql`
    query {
        characters(page: 2, filter: { name: "rick" }) {
            info {
                count
            }
            results {
                name
            }
        }
        location(id: 1) {
            id
        }
        episodesByIds(ids: [1, 2]) {
            id
        }
    }
`

function App() {
    const { data, loading, error } = useQuery(GET_RICK)
    console.log({ data, loading, error })

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Error! {error.message}</h3>

    return <>Nombre del primero: {data.characters.results[0].name}</>
}

export default App
