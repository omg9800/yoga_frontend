import url from "./service";

export const saveEnrolment = async(data) => {

    let res=await fetch(`${url}/enrolments`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
       },
       body: JSON.stringify(data),
     })
    let response=await res.json()
     return response
   };

   export const getEnrolment = async(user) => {
    let k=JSON.parse(localStorage.getItem("token"))
    let token="Bearer "+ k;
    console.log(token);

    let res=await fetch(`${url}/enrolments/get_cur_month_enrol`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "Authorization":token
       },
       body:JSON.stringify({"userId":user.id})
        })
    let response=await res.json()
     return response
   };