import styled from 'styled-components'

const Wrap = styled.header`
    display : flex ;
    flex-direction : row ;

    user-select : none;

    padding : 40px 0 40px 0 ;

    font-family: 'Poppins', sans-serif ;
`;

const TitleContainer = styled.div`
    padding : 0 100px 0 0 ;
`;

const Title = styled.h1`
    font-size : 22px ;
    font-weight : bold ;
`;

const MenuContainer = styled.div`

`;

const Menu = styled.ul`
    display : flex ;
    flex-direction : row ;

    padding : 5px 0 0 0 ;

    font-size : 15px ;
    font-weight : lighter ;
`; 

const MenuItem = styled.li`
    cursor : pointer ;

    &:not(:last-child) {
        margin : 0 25px 0 0  ;
    }
`;

const LanguageContainer = styled.div`
    display : flex ;

    justify-content : flex-end ;
    flex : 1 ;
`;

const Language= styled.div`
     cursor : pointer ;
`;

export {
    Wrap,

    TitleContainer,
    Title,

    MenuContainer,
    Menu,
    MenuItem,
    
    LanguageContainer,
    Language,
}