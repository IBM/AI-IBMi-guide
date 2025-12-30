import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


export default defineConfig({
	integrations: [
		starlight({
			title: 'A comprehensive guide to using AI with IBM i',
			social: {
				github: 'https://github.com/IBM/AI-IBMi-guide',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'AI software stacks',
					autogenerate: { directory: 'ai_stacks' },
					collapsed: true,
					badge: `start here`
				},
				{
					label: 'Accessing Db2 from AI',
					collapsed: true,
					autogenerate: { directory: 'access_db2' }
				},
				{
					label: 'Streaming Db2 transactions',
					collapsed: true,
					autogenerate: { directory: 'stream_db2' }
				},
				{
					label: 'Streaming operational data',
					collapsed: true,
					autogenerate: { directory: 'ops_data' }
				},
				{
					label: 'Calling AI from IBM i',
					collapsed: true,
					autogenerate: { directory: 'access_from_i' }
				},
				{
					label: 'Agentic AI',
					collapsed: true,
					autogenerate: { directory: 'agentic' }
				},
				{
					label: 'Code assistance',
					collapsed: true,
					autogenerate: { directory: 'code_assist' }
				},
				{
					label: 'Solutions',
					collapsed: true,
					items: [
						{
							label: 'IBM',
							collapsed: true,
							autogenerate: { directory: 'solutions/ibm' }
						},
						{
							label: 'Red Hat',
							collapsed: true,
							autogenerate: { directory: 'solutions/redhat' }
						},
						{
							label: 'Equitus',
							collapsed: true,
							autogenerate: { directory: 'solutions/equitus' }
						},
						{
							label: 'Wallaroo',
							collapsed: true,
							autogenerate: { directory: 'solutions/wallaroo' }
						},
					],
				},
				{
					label: 'Other Useful links (external)',
					collapsed: true,
					items: [
						// Using `slug` for internal links.
						{ link: 'https://github.com/IBM/AI-SDK-Db2-IBMi', label: "AI SDK for Db2" },
						{ link: 'https://github.com/ajshedivy/db2i-agents/tree/main', label: "Agentic AI examples" },
						{ link: 'https://theprez.github.io/Manzan/#/', label: "Manzan" },
						{ link: 'https://mapepire-ibmi.github.io/', label: "Mapepire " },
						{ link: 'https://ibm.github.io/Tyrico-IBMi/#/', label: "Tyrico" },
						
					],
				}
			],
			tableOfContents: {
				maxHeadingLevel: 6
			}
		}),
	],
});