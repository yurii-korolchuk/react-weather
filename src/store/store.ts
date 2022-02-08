import { combineReducers, configureStore } from '@reduxjs/toolkit';
import citySlice from './slices/citySlice';
import popupSlice from './slices/popupSlice';
import weatherSlice from './slices/weatherSlice';

const rootReducer = combineReducers({
	weatherSlice,
	popupSlice,
	citySlice,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
		});
	},
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
