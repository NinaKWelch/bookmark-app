import React, { createContext, useContext, useReducer } from 'react'
import { State, Action } from './reducer'

const initialState: State = {
  bookmarks: {},
}

const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
])

type StateProviderProps = {
  reducer: React.Reducer<State, Action>
  children: React.ReactElement
}

export const StateProvider = ({ reducer, children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = (): [State, React.Dispatch<Action>] =>
  useContext(StateContext)
