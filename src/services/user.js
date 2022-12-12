import url from "./service";

export const getUpdatedUser = async (userId) => {
  const response = await fetch(`${url}/users/${userId}`);
  const user = await response.json();
  return user;
};

export const saveUser = async(data) => {
    // console.log("registering...");

   let res=await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
     console.log(res);
    return res
  };

  export const login=(data)=>{

   return fetch(`${url}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  }