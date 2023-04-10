import { useDisclosure } from '@mantine/hooks'
import { Modal, Group, Button, Box, Text } from '@mantine/core'

export default function GameModal ({ name, description, image, platforms, price, year }) {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={opened} onClose={close} title={name} centered>
        <Box sx={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: '500px' }}>
          <Box p='md'>
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
              <Text>$ {price}</Text>
            </Group>
            <Text mt={10}>Trailer</Text>
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
