export const listNewsFeed = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/posts/feed/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const listByUser = async (params, credentials) => {
  try {
    let response = await fetch("/api/posts/by/" + params.userId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const create = async (params, credentials, post) => {
  try {
    let response = await fetch(`/api/posts/new/${params.userId}`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Authorization":"Bearer "+ credentials.t
      },
      body: post
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
};

export const like = async (params, credentials, postId) => {
  try {
    let response = await fetch("/api/posts/like/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({ userId: params.userId, postId }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const unlike = async (params, credentials, postId) => {
  try {
    let response = await fetch("/api/posts/unlike/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({ userId: params.userId, postId }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const comment = async (params, credentials, postId, comment) => {
  try {
    let response = await fetch("/api/posts/comment", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
      body: JSON.stringify({
        userId: params.userId,
        postId,
        comments: comment,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (params, credentials) => {
  try {
    let response = await fetch("/api/posts/" + params.userId, {
      method: "DELTE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
