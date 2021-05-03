import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from '../reducers/dataSlice'
import wasmMetaReducer from '../reducers/wasmMetaSlice'
import suiteResultsReducer from '../reducers/suiteResultSlice'
import scenarioReducer from '../reducers/scenarioSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    wasmMeta: wasmMetaReducer,
    suiteResults: suiteResultsReducer,
    scenarios: scenarioReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
