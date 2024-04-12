export type ChatDataType = {
    id: string,
    type: 'admin' | 'user' | 'guest',
    name: string,
    logo?: string,
    url?: string,
    time: string,
    description?: string,
    message: string,
}