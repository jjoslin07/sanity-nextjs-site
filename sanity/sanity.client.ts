import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '4gf3a9p9',
	dataset: 'production',
	apiVersion: '2023-11-10',
	useCdn: false,
	fetch: {
		cache: 'no-store', // Disables caching in the fetch function
	},
};

const client = createClient(config);

export default client;
