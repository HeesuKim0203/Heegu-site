import { blogTitle } from 'util/text'
import TitleComponent from 'common/HomeContents/Components/TitleComponent'
import { 

    BlogContainer,
    Blog,

} from 'styles/HomeStyle'

function BlogContents(props) {
    return (
        <BlogContainer>
            <Blog>
                <TitleComponent title = { blogTitle }/>
            </Blog>
        </BlogContainer>
    );
}

export default BlogContents;