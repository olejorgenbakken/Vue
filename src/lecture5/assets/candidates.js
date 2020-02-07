const toDate = (date) => {
	date = date.split('.');
	let day = date[0];
	let month = date[1];
	let year = date[2];
	date = new Date(year, month, day);
	return date;
};

let candidates = [
	{
		name: 'Bernard Sanders',
		img: 'http://indepthnh.org/wp-content/uploads/2019/02/bernie.jpg',
		birthDate: toDate('8.9.1941'),
		birthPlace: 'Brooklyn, New York City, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	},
	{
		name: 'Elizabeth Warren',
		img: 'https://static.politico.com/be/38/9700cc2c438e85ec37ba5b03bee4/190201-warren-gty-773.jpg',
		birthDate: toDate('22.6.1949'),
		birthPlace: ' Oklahoma City, Oklahoma, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	},
	{
		name: 'Joe Biden',
		img:
			'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1556200046/190425-biden-tease_iykpkn',
		birthDate: toDate('20.11.1942'),
		birthPlace: 'Scranton, Pennsylvania, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	},
	{
		name: 'Pete Buttigieg',
		img:
			'https://bloximages.newyork1.vip.townnews.com/southbendtribune.com/content/tncms/assets/v3/editorial/9/72/972a2798-c477-11e6-8e93-23ed10fbece2/58556acb639dd.image.jpg',
		birthDate: toDate('19.1.1982'),
		birthPlace: 'South Bend, Indiana, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	},
	{
		name: 'Amy Klobuchar',
		img:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/1200px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
		birthDate: toDate('25.05.1960'),
		birthPlace: 'Plymouth, Minnesota, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	},
	{
		name: 'Donald J. Trump',
		img:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Donald_Trump_official_portrait_%28cropped_2%29.jpg/1200px-Donald_Trump_official_portrait_%28cropped_2%29.jpg',
		birthDate: toDate('14.6.1946'),
		birthPlace: 'Queens, New York, U.S.',
		party: 'republicans',
		partyName: 'Republican Party'
	},
	{
		name: 'Tom Steyer',
		img: 'https://www.ocregister.com/wp-content/uploads/2019/07/Election_2020_Tom_Steyer_40545-1.jpg?w=1024&h=683',
		birthDate: toDate('27.6.1957'),
		birthPlace: 'New York City, New York, U.S.',
		party: 'democrats',
		partyName: 'Democratic Party'
	}
];

export default {
	candidates
};
