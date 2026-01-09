import { useMutation } from "@tanstack/react-query";
import { CreateUserMessage } from "../apiServices/user-message.service";

export const useCreateUserMessage = () => {
    return useMutation({
        mutationFn: CreateUserMessage,
    })
}