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
		{ filename: "07-09-2017", tags: ["analysing", "centre", "backs", "part", "1", "front", "foot", "defending", "biggest", "misconception"] },
		{ filename: "11-09-2017", tags: ["analysing", "centre", "backs", "part", "2", "ball", "playing", "risk", "vs", "reward"] },
		{ filename: "13-10-2017", tags: ["site", "changes", "betting", "players"] },
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
		{ filename: "07-09-2017", tags: ["analysing", "centre", "backs", "part", "1", "front", "foot", "defending", "biggest", "misconception"] },
		{ filename: "11-09-2017", tags: ["analysing", "centre", "backs", "part", "2", "ball", "playing", "risk", "vs", "reward"] },
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
		//{ filename: "b25-09-2017", tags: [""] },

		// New betting posts must go before this but after the next highest up one
		{ filename: "30-09-2017", tags: [""] }
	];
}
