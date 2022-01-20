import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
import Context from './Context'
const client = new ApolloClient({
  uri: 'https://petgram-server-malave2000-o0ek93gc4-malavedaniel.vercel.app/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
