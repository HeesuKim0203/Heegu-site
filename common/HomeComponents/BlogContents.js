import { 

    blogTitle

} from 'util/text'

import { 

    BlogContainer,
    Blog,
    BlogTitleContainer,
    BlogTitle,

} from 'styles/HomeStyle'

function BlogContents(props) {
    return (
        <BlogContainer>
            <Blog>
                <BlogTitleContainer>
                    <BlogTitle>{ blogTitle }</BlogTitle>
                </BlogTitleContainer>
            </Blog>
        </BlogContainer>
    );
}

export default BlogContents;