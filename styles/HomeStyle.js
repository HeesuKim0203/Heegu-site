import styled from 'styled-components'

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

const Text = styled.p`
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
`;

const AboutGreeting = styled(Text)`
    font-size : 17px ;
    font-weight : bold ;
`;

const AboutIntroductory = styled(Text)`

`;

const AboutUrlImformationContainer = styled.div`
    margin-top : 15px ;
`;

const AboutUrl = styled(Text)`
    color : #444444 ;
    
    font-weight : lighter ;
    cursor : pointer ;
`;

//

// Contents Common Style

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

//

// Carerr Style

const CareerContainer = styled(ContentsContainer)`
    margin-top : 15px ;
`;

const Career = styled(Contents)`

`;

const CareerTitleContainer = styled(TitleContainer)`

`;

const CareerTitle = styled(Title)`

`;

const CareerContentsContainer = styled.div`

`;

const CareerContents = styled.div`
    display : flex ;
    flex-direction : row ;

    width : 1194px ;

    margin-top : 30px ;
`;

const CarerrContentsItems = styled.div`
    width : 582px ;

    &:not(:last-child) {
        margin-right : 30px  ;
    }
`;

const CarerrContentsItemsImage = styled.img`
    width : 582px ;
    height : 300px ;

    border-radius : 10px ;

    background-color : #eeeeee ;
`;

const CarerrContentTextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const CarerrContentsItemsTitle = styled.h3`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 21px ;
    font-weight : bold ;
`;

const CarerrContentsItemsDescription = styled.p`
    width : 380px ;

    margin-top : 25px ;

    color : #555555 ;
    line-height : 170% ;
`;

// Project Style

const ProjectContainer = styled(ContentsContainer)`
    
`;

const Project = styled(Contents)`

`;

const ProjectTitleContainer = styled(TitleContainer)`

`;

const ProjectTitle = styled(Title)`

`;

//

// Blog Style

const BlogContainer = styled(ContentsContainer)`
    
`;

const Blog = styled(Contents)`

`;

const BlogTitleContainer = styled(TitleContainer)`

`;

const BlogTitle = styled(Title)`

`;

//

// Contact us Style

const ContactUsContainer = styled(ContentsContainer)`
    
`;

const ContactUs = styled(Contents)`

`;

const ContactUsTitleContainer = styled(TitleContainer)`

`;

const ContactUsTitle = styled(Title)`

`;

//

export {
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

    CareerTitleContainer,
    CareerTitle,

    CareerContentsContainer,
    CareerContents,
    CarerrContentsItems,

    CarerrContentTextArea,
    CarerrContentsItemsImage,
    CarerrContentsItemsTitle,
    CarerrContentsItemsDescription,

    ProjectContainer,
    Project,
    ProjectTitleContainer,
    ProjectTitle,

    BlogContainer,
    Blog,
    BlogTitleContainer,
    BlogTitle,

    ContactUsContainer,
    ContactUs,
    ContactUsTitleContainer,
    ContactUsTitle,
}