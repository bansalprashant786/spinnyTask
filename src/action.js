const getApi = (query='naruto', page = 1) => {
	return fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`);
};

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';
export const LOAD_MORE_FAIL = 'LOAD_MORE_FAIL';

export const fetchCards = (query, page) => dispatch => {
	return new Promise((resolve,reject)=>{
			getApi(query, page)
			.then((res)=>res.json())
			.then((result)=>{
				resolve(dispatch({type: FETCH_SUCCESS, payload:result}))
			})
			.catch((err)=>{
					reject(dispatch({type: FETCH_FAIL, payload:err}));
			})

	 })
};

export const loadMoreCards = (query, page) => dispatch => {
	return new Promise((resolve,reject) => {
		getApi(query, page)
			.then((res)=>res.json())
			.then((result)=>{
				resolve(dispatch({type: LOAD_MORE_SUCCESS, payload:result}))
			})
			.catch((err)=>{
					reject(dispatch({type: LOAD_MORE_FAIL, payload:err}));
			})
	 });
};
