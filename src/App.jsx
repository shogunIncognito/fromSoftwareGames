import { Container } from '@mantine/core'
import './App.css'
import GamesList from './components/GamesList'

export default function App () {
  return (
    <Container size='lg'>
      <div style={{ textAlign: 'center', margin: '2pc' }}>
        <h1>FromSoftware Games</h1>
      </div>
      <GamesList />
    </Container>
  )
}
