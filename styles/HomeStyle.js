import styled from 'styled-components'

// Common Style

const ContentsContainer = styled.div`
    margin-top : 65px ;
`;

const Contents = styled.div`

`;

const TitleContainer = styled.div`

`;

const Title = styled.div`
    font-family : 'Poppins', sans-serif ;
    font-size : 30px ;
    font-weight : bold ;

    user-select : none ;
`;

const ItemContainer = styled.div`
    width : 100% ;
    margin-top : 30px ;
`;

const UrlImage = styled.div`
    ${ props => {
        if( props.url ) return `background-image : url(${ props => props.url }) ;` ; 
        else return `background-color : #eeeeee ;` ;
    } }

    border-radius : 10px ;
`;

//

// Home Wrap Style

const Wrap = styled.div`
    margin : 65px 0 80px 0 ;

    font-family : 'Noto Sans KR', sans-serif ;
`;

//

// About Style

const AboutContainer = styled.div`

`;

const About = styled.div`
    display : flex ;
    flex-direction : column ;
`;

const AboutTitleContainer = styled.div`
    width : 828px ;
`;

const AboutTitle = styled.h2`
    font-family : 'Poppins', sans-serif ;
    font-size : 50px ;
    font-weight : bold ;

    user-select : none ;
    line-height : 150% ;
`;

const AboutAuthorContainer = styled.div`
    margin-top : 50px ;
`;

const AboutAuthor = styled.div`

`;

const AboutProfileContainer = styled.div`
    display : flex ;
    justify-content : end;

    margin-top  : 30px ;
`;

const AboutProfile = styled.div`

`;

const AboutGreeting = styled.p`
    font-family: 'Poppins', sans-serif ;
    font-size : 17px ;
    font-weight : bold ;

    padding : 10px 0 0 0 ;

    user-select : none ;
`;

const AboutIntroductory = styled.p`
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
`;

const AboutUrlImformationContainer = styled.div`
    margin-top : 15px ;
`;

const AboutUrl = styled.p`
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;

    color : #444444 ;
    
    font-weight : lighter ;
    cursor : pointer ;
`;

//

// Carerr Style

const CareerContainer = styled(ContentsContainer)`
    margin-top : 15px ;
`;

const Career = styled(Contents)`

`;

const CareerItemsContainer = styled(ItemContainer)`
    display : flex ;
    flex-direction : row ;
`;

const CarerrItems = styled.div`
    width : 582px ;

    &:not(:last-child) {
        margin-right : 30px  ;
    }
`;

const CarerrItemsImage = styled(UrlImage)`
    width : 582px ;
    height : 300px ;
`;

const CarerrTextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const CarerrItemsTitle = styled.h3`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 21px ;
    font-weight : bold ;
`;

const CarerrItemsDescription = styled.p`
    margin-top : 20px ;

    color : #555555 ;
    line-height : 170% ;

    white-space : pre-wrap ;
`;

// Project Style

const ProjectContainer = styled(ContentsContainer)`
    
`;

const Project = styled(Contents)`

`;

const ProjectItemsContainer = styled(ItemContainer)`
    display : grid ;

    grid-template-columns : repeat( 2, 582px ) ;
    grid-template-rows : repeat( 3, 167px ) ;

    grid-row-gap : 40px ;
    grid-column-gap : 30px ;
`;

const ProjectMainItems = styled.div`
    grid-column : 1 / 2 ;
    grid-row : 1 / 4 ;
`;

const ProjectSubItems = styled.div`
    grid-column : 2 ;
    grid-row : ${ props => props.row } ; 

    display : flex ;
    flex-direction : row ;
`;

const ProjectMainItemsImage = styled(UrlImage)`
    width : 582px ;
    height : 320px ;
`; 

const ProjectMainItemsTextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const ProjectMainItemsTitle = styled.h3`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 27px ;
    font-weight : bold ;
`; 

const ProjectMainItemsResponsibility = styled.p`
    margin-top : 30px ;

    font-size : 15px ;
    font-weight : bold ;
`;

const ProjectMainItemsDescription = styled.p`
    display : block ;
    height : 75px ;

    margin-top : 15px ;

    font-size : 15px ;
    line-height : 170% ;

    color : #555555 ;

    overflow : hidden ;
    -webkit-line-clamp : 3 ;
    -webkit-box-orient : vertical ;
    text-overflow : ellipsis ;
`; 

const ProjectMainItemsSkillContainer = styled.div`
    display : flex ;
    flex-direction : row ;

    margin-top : 30px ;
`; 

const ProjectMainItemsSkill = styled.p`
    display : block ;

    width : 96px ;
    height : 30px ;

    border : 1px solid #0AA79B ;
    border-radius : 100px ;
    
    font-family : 'Poppins', sans-serif ;
    font-size : 13px ;
    font-weight : 600 ;
    text-align : center ;
    line-height : 30px ;

    color : #0AA79B ;

    &:not(:last-child) {
        margin-right : 5px ;
    }
`; 

const ProjectSubItemsImage = styled(UrlImage)`
    width : 270px ;
    height : 165px ;

    margin-right : 40px ;
`;

const ProjectSubItemsTextArea = styled.div`

`;

const ProjectSubItemsTitle = styled.h4`
    margin-top : 20px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 23px ;
    font-weight : bold ;
`;

const ProjectSubItemsIntroduction = styled.p`
    margin-top : 15px ;

    font-size : 15px ;
    color : #555555 ;
    
    line-height : 170% ;
`;

const ProjectSubItemsDate = styled.p`
    margin-top : 20px ;
    
    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    color : #999999 ;
`;

//

// Blog Style

const BlogContainer = styled(ContentsContainer)`
    
`;

const Blog = styled(Contents)`

`;

//

// Contact us Style

const ContactUsContainer = styled(ContentsContainer)`
    
`;

const ContactUs = styled(Contents)`

`;

//

export {
    TitleContainer,
    Title,

    Wrap,

    AboutContainer,
    About,

    AboutTitleContainer,
    AboutTitle,

    AboutAuthorContainer,
    AboutAuthor,

    AboutProfileContainer,
    AboutProfile,
    AboutGreeting,
    AboutIntroductory,
    AboutUrlImformationContainer,
    AboutUrl,

    CareerContainer,
    Career,

    CareerItemsContainer,
    CarerrItems,

    CarerrTextArea,
    CarerrItemsImage,
    CarerrItemsTitle,
    CarerrItemsDescription,

    ProjectContainer,
    Project,

    ProjectItemsContainer,
    ProjectMainItems,
    ProjectSubItems,

    ProjectMainItemsImage,
    ProjectMainItemsTextArea,
    ProjectMainItemsTitle,
    ProjectMainItemsResponsibility,
    ProjectMainItemsDescription,
    ProjectMainItemsSkillContainer,
    ProjectMainItemsSkill,

    ProjectSubItemsImage,
    ProjectSubItemsTextArea,
    ProjectSubItemsTitle,
    ProjectSubItemsIntroduction,
    ProjectSubItemsDate,

    BlogContainer,
    Blog,

    ContactUsContainer,
    ContactUs,
}