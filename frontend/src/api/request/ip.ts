import instance from "../axios";

export const getIPInfoAPI = async (params: any) => {
  const res = await instance.post('get_ip_info', params)
  return res
}