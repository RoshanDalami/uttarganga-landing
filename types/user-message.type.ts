export type TUserMessagePayload = {
    name: string;
    email: string;
    contact?: string;
    subject: string;
    message: string;
}
export type TUserMessageResponse = {
    data: null,
    message: string,
    status: number,
    success: boolean
}