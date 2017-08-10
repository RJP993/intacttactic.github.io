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

		//{ filename: "11-08-2017", tags: ["site", "introduction", "direction", "intacttactic"] },
		//{ filename: "11-08-2017-2", tags: ["arsenal", "season", "preview", "2017/18", "3-4-2-1"] } 
	];

	public static readonly WRITEUPS = [
		{ filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery"] },
		{ filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin"] },
		{ filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim"] },
		{ filename: "04-11-2016", tags: ["shkodran", "mustafi", "good", "bad", "ugly"] },

		//{ filename: "11-08-2017-2", tags: ["arsenal", "season", "preview", "2017/18", "3-4-2-1"] }
	];

	public static readonly PLAYERS = [
		{ filename: "", tags: [""] }
	];

	public static readonly BETTING = [
		{ filename: "", tags: [""] }
	];
}
