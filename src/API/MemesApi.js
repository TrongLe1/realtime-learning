import axiosClient from "./AxiosClient";

const memesApi = {
    getMemes: () => {
        const url = '';
        return axiosClient.get(url);
    },
}
export default memesApi;