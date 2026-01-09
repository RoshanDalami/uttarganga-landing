import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";

import { TUserMessagePayload, TUserMessageResponse } from '@/types/user-message.type'

export const CreateUserMessage = async (payload: TUserMessagePayload) => {
    const resposne: TUserMessageResponse = await mainApiWrapper(
        apiUrl.userMessage.create.method,
        apiUrl.userMessage.create.url,
        payload
    )
    return resposne;
}