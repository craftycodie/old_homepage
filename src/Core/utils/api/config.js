export default ApiConfig =
{
    hostname = "",

    apiRoute = hostname + "",

    blogRoute = apiRoute + "",

    postsRoute = blogRoute + "",

    stickyPostsRoute = postsRoute + "",
    recentPostsRoute = postsRoute + "",
    draftPostsRoute = postsRoute + "",


    postRoute = blogRoute + "",

    newPostRoute = postRoute + "",
    editPostRoute = postRoute + "",


    authRoute = apiRoute + "",
    
    registerRoute = authRoute + "",
    loginRoute = authRoute + "",
    protectedRoute = authRoute + "",
}