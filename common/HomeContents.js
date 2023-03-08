import AboutContents from 'common/HomeComponents/AboutContents'
import CareerContents from 'common/HomeComponents/CareerContents'
import ProjectContents from 'common/HomeComponents/ProjectContents'
import BlogContents from 'common/HomeComponents/BlogContents'
import ContactUsContents from 'common/HomeComponents/ContactUsContents'

import { Container } from 'styles/GlobalStyle'
import { Wrap } from 'styles/HomeStyle'

function HomeContents(props) {
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

export default HomeContents;