class PostData {
	filename: string;
	tags: string[];
}

class Posts {
	public static readonly ALL = [
		{ filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery"] },
		{ filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin"] },
		{ filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim"] },
		{ filename: "04-11-2016", tags: ["shkodran", "mustafi", "good", "bad", "ugly"] },
		{ filename: "11-08-2017", tags: ["site", "introduction", "direction", "intacttactic"] },
		{ filename: "11-08-2017-2", tags: ["arsenal", "season", "preview", "2017/18", "3-4-2-1"] },
		{ filename: "12-08-2017", tags: ["serie", "napoli", "time", "title", "juventus", "ac milan", "roma"] },
		{ filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis"] },
		{ filename: "13-08-2017", tags: ["west", "ham", "short", "term", "improvement"] },
		{ filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis"] },
		{ filename: "15-08-2017", tags: ["borussia", "dortmund", "squad", "analysis"] },
		{ filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis"] },
		{ filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion"] },
		{ filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "anlysis"] },
	];

	public static readonly WRITEUPS = [
		{ filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery"] },
		{ filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin"] },
		{ filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim"] },
		{ filename: "11-08-2017-2", tags: ["arsenal", "season", "preview", "2017/18", "3-4-2-1"] },
		{ filename: "12-08-2017", tags: ["serie", "napoli", "time", "title", "juventus", "ac milan", "roma"] },
		{ filename: "13-08-2017", tags: ["west", "ham", "short", "term", "improvement"] },
		{ filename: "15-08-2017", tags: ["borussia", "dortmund", "squad", "analysis"] },
		{ filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion"] },
	];

	public static readonly PLAYERS = [
		{ filename: "04-11-2016", tags: ["shkodran", "mustafi", "good", "bad", "ugly"] },
		{ filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis"] },
		{ filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis"] },
		{ filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis"] },
		{ filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "anlysis"] },
	];

	public static readonly BETTING = [
		{ filename: "", tags: [""] }
	];
}
