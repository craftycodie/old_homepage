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
        fetch(this.apiConfig.protectedRoute,
        {
            headers: {
                'Authorization': this.JWT,
                "Accept": "application/json",
                "Cache-Control": "no-cache"
            }
        })
        .then(response => {
            if(!response.ok)
            throw Error("Error checking token posts.");
            else return response;
        })
        .then(r => r.json())
        .then(j => {
            if(!j.success && this.JWT != null)
            {
                this.logoutUser();
            }
        }, () => {
            if(this.JWT != null)
            {
                this.logoutUser();
            }
        });
    }

    deletePost(postID, successCallback)
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
            {
                alert("Deleted Post");
                if(successCallback)
                    successCallback(postID);
            }
            else
                alert("Failed to delete post: " + JSON.parse(res.text).message)
        });
    }

    editPost(postID, newTitle, newBody, newSticky, successCallback)
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
            else if(successCallback)
                successCallback(postID);
        });
    }

    newPost(newTitle, newBody, newSticky, successCallback)
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
            else if(successCallback)
                    successCallback(JSON.parse(res.text).data);
        });
    }

    recentPosts(at, count, success, error)
    {
        fetch(this.apiConfig.recentPostsRoute 
        + this.buildQueryString({
            at: at,
            count: count
        }),
        {
            headers: {
                "Accept": "application/json",
                "Cache-Control": "no-cache"
            }
        })
        .then(response => {
          if(!response.ok)
            throw Error("Error retrieving recent posts.");
          else return response;
        })
        .then(r => r.json())
        .then(j => {
            if(!j.success)
                throw Error("Error retrieving recent posts.");

            return j;
        })
        .then(j => {success(j)}, () => {error()});
    }

    blogPost(postID, success, error)
    {
        fetch(this.apiConfig.postRoute + "/" + postID,
        {
            headers: {
                "Accept": "application/json",
                "Cache-Control": "no-cache"
            }
        })
        .then(response => {
          if(!response.ok)
            throw Error("Error retrieving blog post.");
          else return response;
        })
        .then(r => r.json())
        .then(j => {
            if(!j.success)
                throw Error("Error blog recent post.");

            return j;
        })
        .then(j => {success(j)}, () => {error()});
    }

    stickyPosts(success, error)
    {
        fetch(this.apiConfig.stickyPostsRoute,
        {
            headers: {
                "Accept": "application/json",
                "Cache-Control": "no-cache"
            }
        })
        .then(response => {
          if(!response.ok)
            throw Error("Error retrieving sticky posts.");
          else return response;
        })
        .then(r => r.json())
        .then(j => {
            if(!j.success)
                throw Error("Error retrieving sticky posts.");

            return j;
        })
        .then(j => {success(j)}, () => {error()});
    }

    buildQueryString(query)
    {
        var queryString = "";
        for (var property in query)
        {
            if(queryString === "")
                queryString += '?';
            else
                queryString += '&';
                
            queryString += property + "=" + query[property];
        }

        return queryString;
    }
}