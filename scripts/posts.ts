class PostData {
	filename: string;
	tags: string[];
}

class Posts {
	public static readonly ALL = [
		{ filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery", "simplicity", "scouting"] },
		{ filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin", "overachieving", "expectations"] },
		{ filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim", "complete", "manager"] },
		{ filename: "04-11-2016", tags: ["shkodran", "mustafi", "in-depth", "analysis", "good", "bad", "ugly"] },
		{ filename: "11-08-2017", tags: ["direction", "intacttactic", "welcome", "new", "site"] },
		{ filename: "11-08-2017-2", tags: ["arsenal", "2017/18", "breakdown", "3-4-2-1"] },
		{ filename: "12-08-2017", tags: ["napoli", "2017/18", "breakdown", "time", "title", "juventus", "ac milan", "roma"] },
		{ filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis", "overpriced", "underwhelming"] },
		{ filename: "13-08-2017", tags: ["west", "ham", "2017/18", "breakdown", "short", "term", "improvement"] },
		{ filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis", "best", "player", "average", "fan", "see"] },
		{ filename: "15-08-2017", tags: ["borussia", "dortmund", "analysis", "win", "anything", "kids"] },
		{ filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis", "intelligence", "flair"] },
		{ filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion", "miss", "big", "sam"] },
		{ filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "analysis", "dribbling", "without", "plan"] },
		{ filename: "25-08-2017", tags: ["ben", "gibson", "analysis", "england", "best", "central", "defender"] },
		{ filename: "27-08-2017", tags: ["chelsea", "everton", "tactical", "analysis", "gueye", "no-man", "land"] },
	];

	public static readonly WRITEUPS = [
		{ filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery", "simplicity", "scouting"] },
		{ filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin", "overachieving", "expectations"] },
		{ filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim", "complete", "manager"] },
		{ filename: "11-08-2017-2", tags: ["arsenal", "2017/18", "breakdown", "3-4-2-1"] },
		{ filename: "12-08-2017", tags: ["napoli", "2017/18", "breakdown", "time", "title", "juventus", "ac milan", "roma"] },
		{ filename: "13-08-2017", tags: ["west", "ham", "2017/18", "breakdown", "short", "term", "improvement"] },
		{ filename: "15-08-2017", tags: ["borussia", "dortmund", "analysis", "win", "anything", "kids"] },
		{ filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion", "miss", "big", "sam"] },
		{ filename: "27-08-2017", tags: ["chelsea", "everton", "tactical", "analysis", "gueye", "no-man", "land"] },
	];

	public static readonly PLAYERS = [
		{ filename: "04-11-2016", tags: ["shkodran", "mustafi", "in-depth", "analysis", "good", "bad", "ugly"] },
		{ filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis", "overpriced", "underwhelming"] },
		{ filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis", "best", "player", "average", "fan", "see"] },
		{ filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis", "intelligence", "flair"] },
		{ filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "analysis", "dribbling", "without", "plan"] },
		{ filename: "25-08-2017", tags: ["ben", "gibson", "analysis", "england", "best", "central", "defender"] },
	];

	public static readonly BETTING = [
		{ filename: "", tags: [""] }
	];
}
