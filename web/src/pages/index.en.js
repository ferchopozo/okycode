import React from "react"
import { PageContainer } from '../container/PageContainer'
import { MenuToolBar,
         Languages } from '../core/enviorment/Constants'
import { graphql } from "gatsby"
import { ContainerGallery,
         ContainerActivity,
         GridActivity,
         GridActivityImage,
         GridActivityDescription,
         GridLink,
         GridMore,
         GalleryLegend } from '../style/home'
import { Link as CommonLink } from '../components/Common/Link'
import { Button } from '../components/Common/Button'
import { LinkGallery } from '../style/GlobalColor'
import { Paragraph } from '../components/Common/Paragraph'
import { HomeAboutUs } from '../components/Template/HomeAboutUs'

const IndexPage = ({ data }) => { 
  const image = data.allFile.nodes

  return (
              <PageContainer activeMenu={MenuToolBar.Home} 
                            title="Home" 
                            description="Experts in React Js / Native, we can lead projects, do consultancies, work with AWS, Portal design with Gatsby, and mobile applications for iOS and Android" 
                            lang={Languages.English}  >
                 <ContainerGallery  imageUrl={image[0].childImageSharp.original.src}>
                       <GalleryLegend>
                            <h1>Welcome</h1>
                            <Paragraph lines={0}>
                                We make <CommonLink to="/en/service/software-development" text= "Software Development" color={ LinkGallery }  /> with passion, 
                                create <CommonLink to="/en/service/software-architecture" text= "Software Architecture" color={ LinkGallery }  /> just for you.
                                If the time is short <CommonLink to="/en/service/software-consultancy" text= "Researching" color={ LinkGallery }  /> technology and 
                                you have an advantage over your competitors
                            </Paragraph>
                       </GalleryLegend>
                </ContainerGallery>
                 <ContainerActivity>
                      <GridActivity>
                         <GridActivityImage imageUrl="https://binaries.okycode.org/images/slideservice.jpg">
                               <GridLink href="/en/services" >Services</GridLink>
                         </GridActivityImage>
                         <GridActivityDescription>
                              We focus on websites and mobile applications (iOS and Android). We have led Software 
                              projects with agile and classic methodologies, feel free to ask us what you need and 
                              we will be happy to do so. We care about your business and we want to turn it into an 
                              advantage over the rest. We design Software Architectures and 
                              we accompany you towards your success.
                              <br/>
                              <GridMore href="/en/services" rel="canonical" > More Services</GridMore>
                         </GridActivityDescription>
                         <GridActivityImage imageUrl="https://binaries.okycode.org/images/slideproduct.jpg">
                             <GridLink href="/en/products" >Products</GridLink>
                         </GridActivityImage>
                         <GridActivityDescription>
                            Our products are focused on helping you produce immediately with good 
                            technological support and develop your ideas quickly
                             <br/>
                              <GridMore href="/en/products" rel="canonical"> About our Products</GridMore>
                         </GridActivityDescription>
                      </GridActivity>
                 </ContainerActivity>
                 <HomeAboutUs title="About us" >
                      <p>
                      Hi! We are a group of people passionate about software development, with beautiful graphic design
                      for the user . We like to hear your ideas, discover which is the right way to achieve your successes.
                      Our intention is that you start this project at once, turning it into the pillar of something great. 
                      Our happiness is your success.
                      </p>
                      <Button to="/en/aboutus" text="Know more" canonical={true} />
                 </HomeAboutUs>
              </PageContainer>
          )
}
export default IndexPage
export const pageQuery = graphql`query {
  allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {eq: "home.png"}}) {
    nodes {
      childImageSharp {
          original {
            src
          }
        }
    }
  }
}`

