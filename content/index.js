import matter from 'gray-matter'

export const content = () =>
  (context => {
    const keys = context.keys()
    const docs = keys.map(context)

    return keys
      .map((key, i) => {
        const slug = key
          .split('.md')
          .join('')
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
        new Date(p2.frontmatter.date) - new Date(p1.frontmatter.date)
      })
  })( require.context('./', true, /\.md$/) )

export const categories = () =>
  (context => {
    const keys = context.keys()
    const docs = keys.map(context)
    let cats = {}
    docs.forEach((doc, i) => {
      const slug = keys[i]
        .split('.md')
        .join('')
      const { data: frontmatter } = matter(doc.default)
      const { title, category, description, date } = frontmatter
      const blurb = {
        title,
        description,
        date,
        slug
      }
      cats[category] ?
        cats[category].push(blurb)
        :
        cats[category] = [blurb]
    })
    
    return cats
  })( require.context('./', true, /\.md$/) )

export const postsByCat = (cat) =>
  (context => {
    const keys = context.keys()
    const docs = keys.map(context)
    let posts = []
    docs.forEach(doc => {
      const { data: frontmatter } = matter(doc.default)
      const { title, date, description, category } = frontmatter
      const sluggedCat = category.split(' ').join('').toLowerCase()
      if (sluggedCat === cat) {
        const post = {
          title,
          date,
          description,
          category
        }
        posts = [...posts, post]
      }
    })
    return posts
  })( require.context('./', true, /\,md$/) )
