import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  rem
} from '@mantine/core'
import GameModal from './GameModal'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    letterSpacing: 1
  }
}))

export default function GameCard (game) {
  const { classes, theme } = useStyles()

  const features = game.platforms.map((plat, index) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={index}
    >
      {plat.name}
    </Badge>
  ))

  return (
    <Card withBorder radius='md' p='md' className={classes.card}>
      <Card.Section>
        <Image src={game.image} alt={game.name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt='md'>
        <Group position='apart'>
          <Text fz='lg' fw={500}>
            {game.name}
          </Text>
        </Group>
        <Badge size='sm'>Game</Badge>
        <Text
          fz='sm' mt='xs' sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxHeight: '7pc',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {game.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt='md' className={classes.label} c='dimmed'>
          Platforms
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
      <GameModal {...game} />
    </Card>
  )
}
