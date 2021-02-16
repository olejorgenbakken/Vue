const toDate = (date) => {
	date = date.split('.');
	let day = date[0];
	let month = date[1];
	let year = date[2];
	date = new Date(year, month, day);
	return date;
};

let games = [
	{
		title: 'Call of Duty: Modern Warfare',
		img: 'https://gpstatic.com/acache/42/52/1/uk/packshot-fefc4634ec8d8fb1e141a00e187ea7f2.jpg',
		genre: 'Action',
		price: 39.99,
		releaseDate: toDate('01.01.2010'),
		inStock: true
	},
	{
		title: 'CyberPunk 2077',
		img: 'https://media.playstation.com/is/image/SCEA/cyberpunk-2077-box-art-01-ps4-06jun19-en-us?$native_nt$',
		genre: 'Action',
		price: 59.99,
		releaseDate: toDate('17.09.2020'),
		inStock: false
	},
	{
		title: 'Pokémon Mystery Dungeon™: Rescue Team DX',
		img:
			'https://s2.gaming-cdn.com/images/products/6151/orig/pokemon-mystery-dungeon-rescue-team-dx-switch-cover.jpg',
		genre: 'RPG',
		price: 59.99,
		releaseDate: toDate('06.03.2020'),
		inStock: false
	},
	{
		title: 'Animal Crossing: New Horizons',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x8RVoQw8djPZgr-cj3NTFAHaPO%26pid%3DApi&f=1',
		genre: 'RPG',
		price: 49.99,
		releaseDate: toDate('20.03.2020'),
		inStock: false
	},
	{
		title: 'Stardew Valley',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simsnetwerk.com%2Fsites%2Fsimsnetwork.com%2Ffiles%2Fstyles%2Fsnw%2Fpublic%2Fsimpedia%2Fbox-arts%2FStardewValleyBox.png%3Fitok%3D0tBUdUJF&f=1&nofb=1',
		genre: 'Adventure',
		price: 29.99,
		releaseDate: toDate('26.02.2016'),
		inStock: true
	},
	{
		title: 'Ori and the Blind Forest',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.gaming-cdn.com%2Fimages%2Fproducts%2F475%2Forig%2Fori-and-the-blind-forest-definitive-edition-cover.jpg&f=1&nofb=1',
		genre: 'Adventure',
		price: 19.99,
		releaseDate: toDate('11.03.2015'),
		inStock: false
	},
	{
		title: 'The Sims 4',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.contentapi.ea.com%2Fcontent%2Fdam%2Feacom%2FSIMS%2FConsole%2Fthe-sims-4-deluxe-console-xboxone.jpg&f=1&nofb=1',
		genre: 'Simulator',
		price: 25.99,
		releaseDate: toDate('06.05.2013'),
		inStock: true
	},
	{
		title: 'Portal 2',
		img:
			'https://m.media-amazon.com/images/M/MV5BNzEyNGM5YjgtYjFkMC00MTE1LTk1YjgtNjAyYjA2ODUzNzQwXkEyXkFqcGdeQXVyNjk2MTcyMDA@._V1_.jpg',
		genre: 'Puzzle',
		price: 15.99,
		releaseDate: toDate('19.04.2011'),
		inStock: true
	},
	{
		title: 'Euro Truck Simulator 2',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.giantbomb.com%2Fuploads%2Foriginal%2F10%2F103881%2F2978871-2978616-ets2%252B2017%252B-%252Bbox%252Bart.jpg&f=1&nofb=1',
		genre: 'Simulator',
		price: 19.99,
		releaseDate: toDate('19.04.2012'),
		inStock: false
	},
	{
		title: 'Celest',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1c%2FCeleste_box_art_final.png%2F1200px-Celeste_box_art_final.png&f=1&nofb=1',
		genre: 'Platformer',
		price: 22.99,
		releaseDate: toDate('25.01.2018'),
		inStock: true
	},
	{
		title: 'Doom Eternal',
		img:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.gaming-cdn.com%2Fimages%2Fproducts%2F2669%2Forig%2Fdoom-eternal-cover.jpg&f=1&nofb=1',
		genre: 'Action',
		price: 59.99,
		releaseDate: toDate('20.03.2020'),
		inStock: false
	}
];

export default {
	games
};
