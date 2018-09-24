var prodConfig = {}

prodConfig.hostname = 'http://alexnewark.co.uk'

prodConfig.apiRoute = prodConfig.hostname + '/api'

prodConfig.blogRoute = prodConfig.apiRoute + '/blog'

prodConfig.postsRoute = prodConfig.blogRoute + '/posts'

prodConfig.stickyPostsRoute = prodConfig.postsRoute + '/sticky'
prodConfig.recentPostsRoute = prodConfig.postsRoute + '/recent'
prodConfig.draftPostsRoute = prodConfig.postsRoute + '/drafts'

prodConfig.postRoute = prodConfig.blogRoute + '/post'

prodConfig.newPostRoute = prodConfig.postRoute + '/new'
prodConfig.editPostRoute = prodConfig.postRoute + '/edit'

prodConfig.authRoute = prodConfig.apiRoute + '/auth'

prodConfig.registerRoute = prodConfig.authRoute + '/register'
prodConfig.loginRoute = prodConfig.authRoute + '/login'
prodConfig.protectedRoute = prodConfig.authRoute + '/protected'

export default prodConfig
