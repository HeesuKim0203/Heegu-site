import { 

    contactUsTitle

} from 'util/text'

import { 

    ContactUsContainer,
    ContactUs,
    ContactUsTitleContainer,
    ContactUsTitle,

} from 'styles/HomeStyle'

function ContactUsContents(props) {
    return (
        <ContactUsContainer>
            <ContactUs>
                <ContactUsTitleContainer>
                    <ContactUsTitle>{ contactUsTitle }</ContactUsTitle>
                </ContactUsTitleContainer>
            </ContactUs>
        </ContactUsContainer>
    );
}

export default ContactUsContents ;