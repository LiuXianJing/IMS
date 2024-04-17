export type SignType = 'password' | 'code';
export type SignErrType = 'password' | 'account';
export type UserSignInfoType = {
    account: string,
    password?: string,
    token: string,
}