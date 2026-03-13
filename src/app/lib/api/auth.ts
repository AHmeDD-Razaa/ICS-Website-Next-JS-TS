import axios from "axios"

export const loginUser = async (data:any) => {

  const response = await axios.post(
    "https://staging-api.burmmeze.com/api/v1/auth/login",
    data
  )

  return response.data
}