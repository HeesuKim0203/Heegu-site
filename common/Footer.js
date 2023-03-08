import { Container } from 'styles/GlobalStyle' ;

import { 
    Wrap, 
    
    CopyrightContainer, 
    Copyright, 
} from 'styles/FooterStyle' ;

function Footer(props) {
    return (
        <Container>
            <Wrap>
                <CopyrightContainer>
                    <Copyright>Copyright © 2023 HeeGu All Right Reserved.</Copyright>
                </CopyrightContainer>
            </Wrap>
        </Container>
    );
}

export default Footer;