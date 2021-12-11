export const getAllJobs = () => {
  return fetch(`http://localhost:3000/api/jobs`, {
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
