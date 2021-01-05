import React from 'react'
import { PageContainer } from '../../../container/PageContainer'
import { MenuToolBar,
         Languages  } from '../../../core/enviorment/Constants'
import { Banner } from '../../Common/Banner'
import { TitleLayout,
         ContainerBanner } from './styles'
import { Paragraph } from '../../Common/Paragraph'
import { graphql } from "gatsby"

const PostTemplate =  ({ data })=>{
    const post = data.markdownRemark
    return (<PageContainer activeMenu={ MenuToolBar.Blog } 
                          title={ post.frontmatter.title } 
                          description={ post.frontmatter.description } 
                          lang={ Languages.Spanish}  >
                    <div itemScope itemType="http://schema.org/Service">
                        <header>
                          <Banner image={post.frontmatter.imageHeader}>       
                                 <TitleLayout>
                                      <h1 itemProp="name" style={{color: 'white'}}>{post.frontmatter.title}</h1>
                                 </TitleLayout>
                                 <ContainerBanner>
                                      <Paragraph lines={8}>
                                        {post.frontmatter.description}
                                      </Paragraph>
                                 </ContainerBanner>
                          </Banner>
                          
                           <span >{}</span>
                           <meta itemProp="category" content="Service" />
                        </header>
                        <section className="bodyService"
                                 dangerouslySetInnerHTML={{ __html: post.html }}
                                 itemProp="description"/>
                    </div>          
                  
            </PageContainer>)
}

export default PostTemplate


export const query = graphql`
    query PostTemplateQuery($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          description
          imageHeader
        }
      }
  }
`
