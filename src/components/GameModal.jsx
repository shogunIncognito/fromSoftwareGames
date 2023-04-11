import { useDisclosure } from '@mantine/hooks'
import { Modal, Group, Button, Box, Text } from '@mantine/core'

export default function GameModal ({ name, description, image, platforms, price, year, trailer }) {
  const [opened, { open, close }] = useDisclosure(false)

  const styles = {
    container: {
      backgroundImage: `url(${image})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white'
    }
  }

  return (
    <>
      <Modal style={{ margin: '0' }} opened={opened} onClose={close} title={name} centered size='xl'>
        <Box sx={styles.container}>
          <Box p='md' sx={styles.content}>
            <Group mt='md'>
              <Text fw={500}>About the game</Text>
              <Text>{description}</Text>
            </Group>
            <Group mt='xs'>
              <Text fw={500}>Release year</Text>
              <Text>{year}</Text>
            </Group>
            <Group mt='md'>
              <Text fw={500}>Price:</Text>
              <Text>{price ? `$ ${price}` : 'Not available'}</Text>
            </Group>
            <Group mt='xs'>
              <Button onClick={() => { window.location = trailer }} radius='md' style={{ flex: 1 }}>
                See trailer
              </Button>
            </Group>
            <Text mt='md'>
              Buy
            </Text>
            <Group spacing={7} mt={5}>
              {price
                ? platforms.map((plat, index) => (
                  <Button onClick={() => { window.location = plat.store }} key={index}>
                    {plat.name}
                  </Button>
                ))
                : (
                  <Button color='indigo'>Not available</Button>
                  )}
            </Group>
          </Box>
        </Box>
      </Modal>

      <Group mt='xs'>
        <Button onClick={open} radius='md' style={{ flex: 1 }}>
          Show more
        </Button>
      </Group>
    </>
  )
}
