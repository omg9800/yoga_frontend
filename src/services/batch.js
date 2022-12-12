import url from "./service";

export const getBatches = async(data) => {

   let res=await fetch(`${url}/batches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
   let response=await res.json()
    return response
  };

