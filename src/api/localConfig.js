var localConfig = {};

localConfig.hostname = "http://localhost:8080";

localConfig.apiRoute = localConfig.hostname + "/api";

localConfig.blogRoute = localConfig.apiRoute + "/blog";

localConfig.postsRoute = localConfig.blogRoute + "/posts";

localConfig.stickyPostsRoute = localConfig.postsRoute + "/sticky";
localConfig.recentPostsRoute = localConfig.postsRoute + "/recent";
localConfig.draftPostsRoute = localConfig.postsRoute + "/drafts";


localConfig.postRoute = localConfig.blogRoute + "/post";

localConfig.newPostRoute = localConfig.postRoute + "/new";
localConfig.editPostRoute = localConfig.postRoute + "/edit";


localConfig.authRoute = localConfig.apiRoute + "/auth";

localConfig.registerRoute = localConfig.authRoute + "/register";
localConfig.loginRoute = localConfig.authRoute + "/login";
localConfig.protectedRoute = localConfig.authRoute + "/protected";

export default localConfig;