const path = require("path")
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    console.log("Page - ", page.path)
    if (page.path.match(/^\/retreat/)) {
       createPage({
           path: '/retreat/*',
           matchPath: '/retreat/:name',
           component: path.resolve(`src/pages/retreat-detail.jsx`),
       }) 
    }

    if (page.path.match(/^\/room/)) {
        createPage({
            path: '/room/*',
            matchPath: '/room/:name',
            component: path.resolve(`src/pages/room-details.jsx`),
        }) 
     }
    
  }