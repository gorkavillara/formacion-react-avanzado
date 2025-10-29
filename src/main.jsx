import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" })
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
