const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const activityTemplate = path.resolve(`./src/components/PageTemplate/Service/index.js`)
  const postTemplate = path.resolve(`./src/components/PageTemplate/Post/index.js`)

  const typesMarkDown = [{name:"activity", template:activityTemplate, prefix: "service" },
                         {name:"post", template:postTemplate, prefix: "blog" },
                         {name:"post-eng", template:postTemplate, prefix: "en/blog" }]


  for(let index=0; index < typesMarkDown.length; index++){
    const template = typesMarkDown[index];
    const result = await graphql(
      `
        {
          allFile(filter: {sourceInstanceName: {eq: "${template.name}"}}) {
            edges {
              node {
                childMarkdownRemark {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        }
      `
    );

    if (result.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        result.errors
      )
      return
    }

    const posts = result.data.allFile.edges;

    if (posts.length > 0) {
      posts.forEach((post, index) => {
          if(post.node.childMarkdownRemark){
            const slug = post.node.childMarkdownRemark.fields.slug;
            if(slug){
                const relativePath = replacePath(slug, template.prefix)
                createPage({
                  path: relativePath,
                  component: template.template,
                  context: {
                    slug: slug
                  },
                });
                console.log(relativePath, "Page Created")
            }
          }
      });
    }
  
  }
  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
    

  }
}

exports = replacePath = (path, prefix = null ) => {
  let fixpath = path.substr(1,path.length-2)
  const result =  fixpath.split("/");
  const folder = prefix?`${prefix}/`: '';
  let returnValue = '';
  
  if(1 < result.length){
      const language = result[1].replace("/", "");
      const slug = result[0].replace("/", "");
     

      returnValue = `/${language}/${folder}${slug}`; 
  }
  else{
    const slug = result[0].replace("/", "");

    returnValue = `/${folder}${slug}`;
  }

  return returnValue
}