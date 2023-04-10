import games from '../assets/data.json'
import { Grid } from '@mantine/core'
import GameCard from './GameCard'

export default function GamesList () {
  return (
    <Grid>
      {games.map(game => (
        <Grid.Col xs={6} md={6} lg={4} key={game.id}>
          <GameCard {...game} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
