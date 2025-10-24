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
            Authorization: `tokens API-Key ${process.env.GQL_TOKEN}`,
            'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
        },
    };
});

export const apolloClient = new ApolloClient({
    // uri: API_URL,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});
