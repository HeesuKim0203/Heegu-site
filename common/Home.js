import AboutContents from 'common/HomeContents/AboutContents'
import CareerContents from 'common/HomeContents/CareerContents'
import ProjectContents from 'common/HomeContents/ProjectContents'
import BlogContents from 'common/HomeContents/BlogContents'
import ContactUsContents from 'common/HomeContents/ContactUsContents'

import { Container } from 'styles/GlobalStyle'
import { Wrap } from 'styles/HomeStyle'

function Home (props) {
    return (
        <Container>
            <Wrap>
                <AboutContents />
                <CareerContents />
                <ProjectContents />
                <BlogContents />
                <ContactUsContents />
            </Wrap>
        </Container>
    );
}

export default Home ;