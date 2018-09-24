import apiNetworking from '../../Core/utils/apiNetworking'

export async function getPost (postId) {
  const postRes = getPostRequest(postId)
  return postRes.data.data
}

function getPostRequest (postId) {
  return apiNetworking.get(`api/blog/post/${postId}`)
}
