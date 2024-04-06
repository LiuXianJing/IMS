import instance from "../axios";

 export const addUserAPI = async (params: any) => {
    const res = await instance.post('add_user', params)
    return res
  }

  export const getUserAPI = async () => {
    const res = await instance.post('get_user',)
    return res
  }