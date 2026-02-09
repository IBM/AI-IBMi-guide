import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


export default defineConfig({
	integrations: [
		starlight({
			title: 'A comprehensive guide to using AI with IBM i',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/IBM/AI-IBMi-guide' },
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Overview',
					collapsed: true,
					items: [
						{
							label: 'Why AI with IBM i?',
							link: 'overview/why',
							badge: `start here`
						},
						{
							label: 'Choosing an AI stack',
							link: 'overview/choosing_stack'
						},
						{
							label: 'AI Hardware acceleration',
							collapsed: true,
							autogenerate: { directory: 'overview/ai_hardware' }
						}
					],
				},
				{
					label: 'Use cases',
					collapsed: true,
					autogenerate: { directory: 'journeys' },
				},
				{
					label: 'Integrations',
					collapsed: true,
					items: [
						{
							label: 'Accessing Db2 from AI',
							collapsed: true,
							autogenerate: { directory: 'integrations/access_db2' }
						},
						{
							label: 'Calling AI from IBM i',
							collapsed: true,
							autogenerate: { directory: 'integrations/access_from_i' }
						},
						{
							label: 'Streaming Db2 transactions',
							collapsed: true,
							autogenerate: { directory: 'integrations/stream_db2' }
						},
						{
							label: 'Streaming operational data',
							collapsed: true,
							autogenerate: { directory: 'integrations/ops_data' }
						},
						{
							label: 'Accessing IBM i from IBM Cloud',
							collapsed: true,
							autogenerate: { directory: 'integrations/access_ibmi_ibmcloud' }
						},
					],
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
							label: 'Wallaroo',
							collapsed: true,
							autogenerate: { directory: 'solutions/wallaroo' }
						},
						{
							label: 'Rocketgraph',
							collapsed: true,
							autogenerate: { directory: 'solutions/rocketgraph' }
						},
						{
							label: 'Equitus',
							collapsed: true,
							autogenerate: { directory: 'solutions/equitus' }
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