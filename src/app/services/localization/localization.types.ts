export interface Language {
	chooseCategory: string;
	reset: string;
	gamesSearch: string;
	mostPopular: string;
	navLinks: NavLink[];
	footerText: string;
}

export interface NavLink {
	title: string;
	links?: NavLink[];
}

export type Lang = 'ru' | 'en';