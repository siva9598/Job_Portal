export const signup = (user) => {
  return fetch(`http://localhost:3000/api/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(`http://localhost:3000/api/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const authenticate = (data, next) => {
//   console.log(data);
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(data));
//     next();
//   }
// };
