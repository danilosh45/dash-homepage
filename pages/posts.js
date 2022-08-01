import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h2" fontSize={40} mb={4}>
        Gallery of my popular Photography soon!!
      </Heading>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
