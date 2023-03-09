import { contactUsTitle } from 'util/text'
import TitleComponent from 'common/HomeContents/Components/TitleComponent'
import { 

    ContactUsContainer,
    ContactUs,

} from 'styles/HomeStyle'

function ContactUsContents(props) {
    return (
        <ContactUsContainer>
            <ContactUs>
                <TitleComponent title = { contactUsTitle } />
            </ContactUs>
        </ContactUsContainer>
    );
}

export default ContactUsContents ;