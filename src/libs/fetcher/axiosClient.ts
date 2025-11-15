import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_REST_URL ?? '';
const TOKEN = process.env.SUPABASE_REST_TOKEN ?? '';

export const axiosClient = (props?: { baseURL?: string }) => {
    let baseURL = BASE_URL;
    if (props?.baseURL) baseURL = props.baseURL;

    return axios.create({
        baseURL,
        timeout: 10000,
        headers: {
            authorization: `tokens API-Key ${TOKEN}`,
        },
    });
};
