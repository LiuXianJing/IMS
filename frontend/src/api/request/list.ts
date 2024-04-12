
import instance from "../axios";

export const getVisualListAPI = async () => {
  const res = await instance.post('get_visual_list',)
  return res
}