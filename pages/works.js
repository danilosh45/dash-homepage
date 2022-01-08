import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import thumbIndrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbIndrop}>
            A project by danilo comming soom
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
            A simple bot for discord for assitance and more
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
