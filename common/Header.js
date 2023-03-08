import Image from 'next/image'
import language_icon from 'public/language_icon.svg'

import { menuTitle, menu } from 'util/text'

import { Container } from 'styles/GlobalStyle' ;
import { 
    Wrap, 
    
    TitleContainer, 
    Title, 
    
    MenuContainer, 
    Menu, 
    MenuItem, 
    
    LanguageContainer,
    Language
} from 'styles/HeaderStyle' ;


function Header(props) {
    return (
        <Container>
            <Wrap>
                <TitleContainer>
                <Title>{ menuTitle }</Title>
                </TitleContainer>
                <MenuContainer>
                    <Menu>
                        { menu.map((value, index) => {
                            return (
                                <MenuItem
                                    key = { index }
                                >{ value }</MenuItem>
                            )
                        }) }
                    </Menu>
                </MenuContainer>
                <LanguageContainer>
                    <Language>
                        <Image 
                            src = { language_icon }
                            alt = "Icon of the language"
                        />
                    </Language>
                </LanguageContainer>
            </Wrap>
        </Container>
    )
}

export default Header;