import instance from "../axios";

export const signInOrUpAPI = async (params: any) => {
  const res = await instance.post('sign_in_up', params)
  return res
}

export const addUserAPI = async (params: any) => {
    const res = await instance.post('add_user', params)
    return res
}

export const getUserAPI = async () => {
    const res = await instance.post('get_user',)
    return res
}