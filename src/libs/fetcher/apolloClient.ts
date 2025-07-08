import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const API_URL = process.env.GQL_URL;

const httpLink = createHttpLink({
    uri: API_URL,
    credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            Accept: 'application/json',

            // credentials: 'include',
            // Authorization: `Bearer ${process.env.STRAPI_KEY}`,
            Authorization: `token API-Key ${process.env.GQL_TOKEN}`,
        },
    };
});

export const apolloClient = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});
