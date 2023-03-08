import Image from 'next/image'
import author_picture from 'public/author_picture.png'

import { 

    aboutTitle, 
    aboutGreeting,
    aboutIntroductory,
    aboutUrlImformation 
    
} from 'util/text'

import { 

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

} from 'styles/HomeStyle'

function AboutCotents(props) {
    return (
        <AboutContainer>
            <About>
                <AboutTitleContainer>
                    <AboutTitle>{ aboutTitle }</AboutTitle>
                </AboutTitleContainer>
                <AboutAuthorContainer>
                    <AboutAuthor>
                        <Image 
                            src = { author_picture }
                            alt = "Picture of the author"
                            style={{ borderRadius : '10px' }}
                        />
                    </AboutAuthor>
                </AboutAuthorContainer>
                <AboutProfileContainer>
                    <AboutProfile>
                        <AboutGreeting>{ aboutGreeting }</AboutGreeting>
                        <AboutIntroductory>{ aboutIntroductory.KR }</AboutIntroductory>
                        <AboutUrlImformationContainer>
                            { aboutUrlImformation.map((value, index) => {
                                return(
                                    <AboutUrl 
                                        key = { index }>
                                    { value }</AboutUrl>
                                )
                            }) }
                        </AboutUrlImformationContainer>
                    </AboutProfile>
                </AboutProfileContainer>
            </About>
        </AboutContainer>
    );
}

export default AboutCotents;