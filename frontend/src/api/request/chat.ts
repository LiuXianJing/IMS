
import instance from "../axios";

export const getChatMessagesAPI = async () => {
  const res = await instance.post('get_chat_messages',)
  return res
}

export const sendChatMessageAPI = async (param: any) => {
  const res = await instance.post('send_chat_message', param)
  return res
}