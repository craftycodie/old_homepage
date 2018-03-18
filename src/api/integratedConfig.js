var integratedConfig = {};

integratedConfig.hostname = "";

integratedConfig.apiRoute = integratedConfig.hostname + "/api";

integratedConfig.blogRoute = integratedConfig.apiRoute + "/blog";

integratedConfig.postsRoute = integratedConfig.blogRoute + "/posts";

integratedConfig.stickyPostsRoute = integratedConfig.postsRoute + "/sticky";
integratedConfig.recentPostsRoute = integratedConfig.postsRoute + "/recent";
integratedConfig.draftPostsRoute = integratedConfig.postsRoute + "/drafts";


integratedConfig.postRoute = integratedConfig.blogRoute + "/post";

integratedConfig.newPostRoute = integratedConfig.postRoute + "/new";
integratedConfig.editPostRoute = integratedConfig.postRoute + "/edit";


integratedConfig.authRoute = integratedConfig.apiRoute + "/auth";

integratedConfig.registerRoute = integratedConfig.authRoute + "/register";
integratedConfig.loginRoute = integratedConfig.authRoute + "/login";
integratedConfig.protectedRoute = integratedConfig.authRoute + "/protected";

export default integratedConfig;