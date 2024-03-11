import { api } from "./api.js"

class Server {
    RequestPost(action, params) {
        return api.post('', { action, params }).then(
            (res) => {
                return res.data.result
            }
        )
            .catch((error) => {
                console.error(`Error ID: ${ error.response.status } - ${ error.message }`)
            })
    }
}

export const server = new Server