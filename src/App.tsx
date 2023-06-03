import React from 'react'
import Container from '@mui/material/Container'
import Results from './components/Results'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const App: React.FC = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Results />
      </Container>
    </QueryClientProvider>
  )
}

export default App