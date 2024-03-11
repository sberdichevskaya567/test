import { useQuery } from "@tanstack/react-query"
import { server } from "../index.js"

const Mutation = (action, params) => {
    const callback = async () => {
        return await server.RequestPost(action, params) || []
    }

    return useQuery({
        queryKey: ['Request', action, params],
        queryFn: () => callback(),
        initialData: () => []
    })
}

export { Mutation }
