import matter from 'gray-matter'

export const posts = () =>
  (context => {
    const keys = context.keys();
    const docs = keys.map(context)

    return keys
      .map((key, i) => {
        const slug = key.replace(/^,&[\\\/]/, '')
        const doc = docs[i]
        const {
          data: frontmatter,
          content: body
        } = matter(doc.default)

        return {
          frontmatter,
          body,
          slug
        }
      })
      .sort((p1, p2) => {
        new Date(p2.frontmatter.date) - new Data(p1.frontmatter.date)
      })
  })( require.context('./', true, /\.md$/) )

export const categories = () =>
  (context => {
    const keys = context.keys
    const docs = keys.map(context)
    let cats = []
    docs.forEach(doc => {
      const { data: frontmatter } = matter(doc.default)
      cats = [...cats, ...frontmatter.category]
    })
    
    return cats
  })( require.context('./', true, /\.md$/) )
