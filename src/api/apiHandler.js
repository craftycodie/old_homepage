import request from "superagent"

export default class ApiHandler {

    constructor(apiConfig, cookies, history)
    {
        console.log(apiConfig);
        this.apiConfig = apiConfig;
        this.cookies = cookies;
        this.history = history;
        this.JWT = this.cookies.get("token");
    }

    isUserLogged()
    {
        if(this.JWT == null)
            return false;

        this.checkToken();

        return true;
    }

    loginUser(username, password)
    {
        request
        .post(this.apiConfig.loginRoute)
        .send({username: username, password: password})
        .set('Accept', 'application/json')
        .set("Cache-Control", "no-cache")
        .end((err, res) => {
            setTimeout(() => {
                var success = JSON.parse(res.text).success;

                if(success)
                {
                    this.cookies.set("token", JSON.parse(res.text).token, {path: "/"});
                    this.JWT = JSON.parse(res.text).token;
                    this.history.push('/');
                }
                else
                {
                    alert("Invalid Credentials");
                }

                return success;
            }, 500);
        });
    }

    logoutUser()
    {
        this.cookies.remove("token");
        this.JWT = null;
        this.history.push('/');
    }

    checkToken()
    {
        request
        .get(this.apiConfig.protectedRoute)
        .set('Authorization', this.JWT)
        .set('Accept', 'application/json')
        .set("Cache-Control", "no-cache")
        .end((err, res) => {
            var success = JSON.parse(res.text).success;

            if(!success && this.JWT != null)
            {
                this.logoutUser();
                alert("invalid token");
            }
        });
    }

    deletePost(postID)
    {
        if(!this.isUserLogged())
            return;

        request
        .delete(this.apiConfig.postRoute + "/" + postID)
        .set('Authorization', this.JWT)
        .set('Accept', 'application/json')
        .set("Cache-Control", "no-cache")
        .end((err, res) => {
            var success = JSON.parse(res.text).success;
            if(success)
                alert("Deleted Post");
            else
                alert("Failed to delete post: " + JSON.parse(res.text).message)
        });

        this.history.push("/blog");
    }

    editPost(postID, newTitle, newBody, newSticky)
    {
        if(!this.isUserLogged())
            return;

        request
        .post(this.apiConfig.postRoute + "/" + postID + "/edit")
        .send({title: newTitle, body: newBody, sticky: newSticky, tags: []})
        .set('Authorization', this.JWT)
        .set('Accept', 'application/json')
        .set("Cache-Control", "no-cache")
        .end((err, res) => {
            var success = JSON.parse(res.text).success;
            if(!success)
                alert("Failed to edit post: " + JSON.parse(res.text).message)
            else
                this.history.push("/blog/post/" + postID);
        });
    }

    newPost(newTitle, newBody, newSticky)
    {
        if(!this.isUserLogged())
            return;

        request
        .post(this.apiConfig.newPostRoute)
        .send({title: newTitle, body: newBody, sticky: newSticky, tags: []})
        .set('Authorization', this.JWT)
        .set('Accept', 'application/json')
        .set("Cache-Control", "no-cache")
        .end((err, res) => {
            var success = JSON.parse(res.text).success;
            if(!success)
                alert("Failed to create post: " + JSON.parse(res.text).message)
            else
                this.history.push("/blog/post/" + JSON.parse(res.text).data);
        });
    }
}