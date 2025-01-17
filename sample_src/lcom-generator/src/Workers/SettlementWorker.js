import { loadData, hasError } from "../utils";

export const DataLoader = async () => {
    // const path = "/db/";
    const dbPath = "SMLC";
	const rawData = {
		"SMLC": {
			"1": {
				"NAME": "Settlement Load 1",
			},
			"2": {
				"NAME": "Settlement Load 2",
			},
		}
	};
    // const rawData = await loadData(path + dbPath);
    if (hasError(rawData)) return [];
    if (rawData[dbPath] === undefined) return [];
    
    let registeredNames = [];
    const dbData = rawData[dbPath];
    registeredNames = Object.keys(dbData).map((value) => (dbData[value].NAME));
    return registeredNames;
}
