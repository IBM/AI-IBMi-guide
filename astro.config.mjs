import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
// default defineConfig({});
export default defineConfig({
	integrations: [
		starlight({
			title: 'A comprehensive guide to using AI with IBM i',
			social: {
				github: 'https://github.com/Mapepire-IBMi',
			},
			sidebar: [
				{
					label: 'AI software stacks',
					autogenerate: { directory: 'ai_stacks' },
					badge: `start here`
				},
				{
					label: 'Accessing Db2 from AI',
					autogenerate: { directory: 'access_db2' }
				},
				{
					label: 'Streaming Db2 transactions',
					autogenerate: { directory: 'stream_db2' }
				},
				{
					label: 'Streaming operational data',
					autogenerate: { directory: 'ops_data' }
				},
				{
					label: 'Calling AI from IBM i',
					autogenerate: { directory: 'access_from_i' }
				},
				{
					label: 'Code assistance',
					autogenerate: { directory: 'code_assist' }
				},
			],
			tableOfContents: {
				maxHeadingLevel: 4
			}
		}),
	],
});