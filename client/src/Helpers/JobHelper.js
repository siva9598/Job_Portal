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
export const getAllJobsOfRecuiter = () => {
  return fetch(`http://localhost:3000/api/recuiter/jobs`, {
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

export const createJob = (job) => {
  return fetch(`http://localhost:3000/api/job/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(job),
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

export const applyForJob = (details) => {
  console.log(details);
  return fetch(`http://localhost:3000/api/job/apply`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("got no erorr");
      return response;
    })
    .catch((err) => {
      console.log("got erorr");
      console.log(err);
    });
};

export const getAllUserApplications = () => {
  return fetch(`http://localhost:3000/api/user/applications`, {
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
export const getAllUserProfilesForJob = (job_id) => {
  return fetch(
    `http://localhost:3000/api/job/applicant_profiles?job_id=${job_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
