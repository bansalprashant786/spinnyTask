import {
	FETCH_SUCCESS,
	FETCH_FAIL,
	LOAD_MORE_SUCCESS,
	LOAD_MORE_FAIL
} from './action';


const initialState = {
	data: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case FETCH_SUCCESS:{
			console.log('payload', action.payload);
			state = {
				...state,
				data: action.payload.results,
				error: false
			}
			return state;
		}
		case FETCH_FAIL:{
			state={
				...state,
				error: true
			}
			return state;
		}

		case LOAD_MORE_SUCCESS:{
			state={
				...state,
				data: [...state.data, ...action.payload.results],
				loadMoreError: false
			}
			return state;
		}

		case LOAD_MORE_FAIL: {
			state={
				...state,
				loadMoreError: true
			}
			return state;
		}

		default :{
			return state
		}
	}
}
export default reducer;
