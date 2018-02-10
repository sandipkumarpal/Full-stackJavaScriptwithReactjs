class DataApi {
	constructor(rowData) {
		this.rowData = rowData;
	}
	mapIntoObject(arr) {
		return arr.reduce((acc, curr) => {
			acc[curr.id] = curr;
			return curr;
		}, {});
	}
	getArticles() {
		return this.mapIntoObject(this.rowData.articles);
	}
	geAuthors() {
		return this.mapIntoObject(this.rowData.authors);
	}
}

export default DataApi;
