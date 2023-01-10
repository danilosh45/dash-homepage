import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
//cambiar los nombres de las imagenes y modificar la imagen de dashboard tool
import thumbCreativos from '../public/images/works/inkdrop_eyecatch.png'
import thumbMimi from '../public/images/works/discord_bot_midori.png'
import thumbDashboard from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="creativos"
            title="HeyCreativos"
            thumbnail={thumbCreativos}
          >
            Build backend and deploy for Comercial website
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mimi" title="Mimi" thumbnail={thumbMimi}>
            A simple bot for discord for assitance and more
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dashboard"
            title="Dash dashboard"
            thumbnail={thumbDashboard}
          >
            Web scraping for dev
          </WorkGridItem>
        </Section>

        <Divider />
      </SimpleGrid>
    </Container>
  )
}

export default Works
