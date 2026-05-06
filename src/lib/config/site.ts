export const siteConfig = {
	name: 'SVAF',
	siteName: '二叉树树',
	title: '《二叉树树》官方网站',
	subtitle: 'AcoFork',
	url: 'https://2x.nz',
	icon: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0',
	description: '《二叉树树》是一个专注于IT/互联网技术分享与实践的个人技术博客，在这里你可以找到众多前沿技术的分享与实践经验。',
	keywords: ['二叉树树','二叉树树官网','树','二叉树','二叉','博客','AcoFork Blog','AcoFork','Blog','acofork blog','acofork','blog'],
	lang: 'zh_CN',
	ogImage: '/files/img/official.png',
	author: {
		name: 'AcoFork',
		url: 'https://2x.nz'
	},
	bio: {
		avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0',
		name: '二叉树树',
		bio: 'Protect What You Love.',
		links: [
			{
				name: 'QQ群',
				icon: 'simple-icons:qq',
				url: 'https://qm.qq.com/q/FWqOHlwL2m'
			},
			{
				name: 'Telegram群',
				icon: 'simple-icons:telegram',
				url: 'https://t.me/+_07DERp7k1ljYTc1'
			},
			{
				name: 'Bilibili',
				icon: 'simple-icons:bilibili',
				url: 'https://space.bilibili.com/325903362'
			},
			{
				name: 'GitHub',
				icon: 'simple-icons:github',
				url: 'https://github.com/afoim'
			},
			{
				name: 'Folo',
				icon: 'simple-icons:folo',
				url: 'https://app.folo.is/share/feeds/245004133358075904'
			}
		]
	},
	live: {
		statusApi: 'https://b-live.2x.nz',
		roomUrl: 'https://live.bilibili.com/12005649'
	},
	services: {
		aiDraw: 'https://ai.2x.nz',
		gallery: 'https://p.2x.nz',
		fileExplorer: 'https://e3.2x.nz/api/',
		nat: 'https://nat.2x.nz/api/analyze',
		statsShare: 'https://u.2x.nz/share/CdkXbGgZr6ECKOyK',
		longDomain: 'https://iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.in',
		pageViews: 'https://t.2x.nz/batch'
	},
	analytics: {
		umami: { src: 'https://u.2x.nz/script.js', websiteId: '5d710dbd-3a2e-43e3-a553-97b415090c63' },
		cfWebAnalytics: { token: '15fe148e91b34f10a15652e1a74ab26c' },
		cfUmami: { src: 'https://t.2x.nz/tracker.js' },
		baidu: { id: 'a87028bb5a1ed77d98f192bc12b56142' },
		google: { measurementId: 'G-RBZVQJCV26' },
		clarity: { projectId: 'v94yrasi99' }
	},
	giscus: {
		repo: 'afoim/giscus-fuwari',
		repoId: 'R_kgDOOi8quw',
		category: 'Announcements',
		categoryId: 'DIC_kwDOOi8qu84CprDV'
	},
	repos: {
		frontend: 'https://github.com/afoim/svaf',
		backend: 'https://github.com/afoim/acofork_forum_backend',
		natTool: 'https://github.com/afoim/webrtc_check_nat'
	},
	forum: {
		totpIssuer: 'AcoFork Forum'
	},
	links: {
		github: 'https://github.com/afoim/svaf'
	}
};

export type SiteConfig = typeof siteConfig;
