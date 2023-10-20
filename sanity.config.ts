import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'Sanity Next.js Site',

	projectId: '4gf3a9p9',
	dataset: 'production',
	basePath: '/studio',
	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
