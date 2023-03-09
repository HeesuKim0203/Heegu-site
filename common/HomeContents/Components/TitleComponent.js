import { 
    
    TitleContainer,
    Title

} from 'styles/HomeStyle'

function TitleConponent({ title }) {
    return (
        <TitleContainer>
            <Title>{ title }</Title>
        </TitleContainer>
    );
}

export default TitleConponent;