import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import CryptoGridThumbnail from '../public/images/crypto-grid.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="crypto-grid"
              title="Crypto-Grid"
              thumbnail={CryptoGridThumbnail}
            >
              A hyper realistic Play to Earn (P2E) crypto mining simulator game
              ($GRID)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="crypto-grid"
              title="Crypto-Grid"
              thumbnail={CryptoGridThumbnail}
            >
              A hyper realistic Play to Earn (P2E) crypto mining simulator game
              ($GRID)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="crypto-grid"
              title="Crypto-Grid"
              thumbnail={CryptoGridThumbnail}
            >
              A hyper realistic Play to Earn (P2E) crypto mining simulator game
              ($GRID)
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
