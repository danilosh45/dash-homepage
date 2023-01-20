import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Footer from '../components/footer'
import Layout from '../components/layouts/article'
//cambiar los nombres de las imagenes y modificar la imagen de dashboard tool
import thumbCreativos from '../public/images/works/inkdrop_eyecatch.png'
import thumbMimi from '../public/images/works/discord_bot_midori.png'

const Works = () => {
  return (
    <Layout title="Works">
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
        </SimpleGrid>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Works
