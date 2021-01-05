import React from 'react'
import { PageContainer } from '../container/PageContainer'
import { LayoutBanner } from '../container/LayoutBanner'
import { MenuToolBar,
    Languages } from '../core/enviorment/Constants'
import { Container, SmallText } from '../style/blog'
import { Link } from '../components/Common/Link'
import { HoverLink } from '../style/GlobalColor'

const Blog = ({ data })=>{
    const backgroundCategory = process.env.GATSBY_BLOG
    const posts = data.allFile.edges
    const monthNames = ["January", "Fdbruary", "March", "April", "May", "June",
                         "July", "August", "September", "October", "November", "December"];
    const renderArticles = () => {
        const filter = posts.filter(filter => filter.node.childMarkdownRemark)
        return filter.map((post, index)=>{
                const date = new Date(post.node.childMarkdownRemark.frontmatter.date)
                
                return (<li key={index}>
                          <h2><Link color={HoverLink} 
                                to={`/en/blog${post.node.childMarkdownRemark.fields.slug}`} 
                                text={post.node.childMarkdownRemark.frontmatter.title} /></h2>
                                {post.node.childMarkdownRemark.frontmatter.description}
                          <SmallText>Publish: {`${monthNames[date.getMonth()]}, ${date.getDay()} of ${date.getFullYear()}`}</SmallText>
                    </li>)
        })
    }
    return (<PageContainer activeMenu={MenuToolBar.Home} 
            title={"Blog"} 
            description={"We have excellent information that we want to share with you. Thank you to be here."} 
            lang={Languages.English}  >
                <LayoutBanner title="Blog"
                              colorTitle = {'#00ff00'}
                              colorTextBanner = 'black'
                              color={'white'} 
                              textBanner = "We have excellent information that we want to share with you. Thank you to be here."
                              widthBanner = "20%"
                              image={backgroundCategory} >
                    <Container>
                        <ul>
                            {renderArticles()}
                        </ul>
                     </Container>
                </LayoutBanner>

        </PageContainer>)
}
export default Blog;

export const pageQuery = graphql`query {
    allFile(filter: {sourceInstanceName: {eq: "post-eng"}}) {
        edges {
            node {
                childMarkdownRemark {
                    fields {
                        slug
                    }
                    frontmatter {
                        description
                        date
                        title
                    }
                }
            }
        }
    }
  }`
  