export type ChatDataType = {
    id: string,
    type: 'admin' | 'user' | 'guest',
    name: string,
    logo?: string,
    url?: string,
    time: string,
    description?: string,
    message: AllMessageValueType[] | string,
}

export type MessageType = string | ArrayBuffer | undefined | null

export type OtherFileType = {
    name: string,
    size?: number, // unit: B
    url: string,
    type: string,
    lastModified: number | string,
}

export type AllMessageValueType = {
    value: string,
    type: 'text' | 'image',
} & OtherFileType & {
    lastModified?: number | string
}
