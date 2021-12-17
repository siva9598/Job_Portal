export const createUserProfile = (user_profile) => {
  return fetch(`http://localhost:3000/api/profile/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(user_profile),
  })
    .then((response) => {
      console.log("got no erorr");
      //return response.json();
      return response;
    })
    .catch((err) => {
      console.log("got erorr");
      console.log(err);
    });
};

export const getsUserProfile = () => {
  return fetch(`http://localhost:3000/api/profile/get`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchUserProfile = (user_profile) => {
  return fetch(`http://localhost:3000/api/profile/update`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(user_profile),
  })
    .then((response) => {
      console.log("got no erorr");
      return response.json();
    })
    .catch((err) => {
      console.log("got erorr");
      console.log(err);
    });
};
