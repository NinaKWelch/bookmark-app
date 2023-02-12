import { Bookmark } from '../types'

export type State = {
  bookmarks: { [id: string]: Bookmark }
}

export type Action =
  | {
      type: 'SET_BOOKMARK_LIST'
      payload: Bookmark[]
    }
  | {
      type: 'ADD_BOOKMARK'
      payload: Bookmark
    }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_BOOKMARK_LIST':
      return {
        ...state,
        bookmarks: {
          ...action.payload.reduce(
            (memo, bookmark) => ({ ...memo, [bookmark.id]: bookmark }),
            {}
          ),
          ...state.bookmarks,
        },
      }
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          [action.payload.id]: action.payload,
        },
      }
    default:
      return state
  }
}

export const setBookmarkList = (payload: Bookmark[]): Action => {
  return {
    type: 'SET_BOOKMARK_LIST',
    payload,
  }
}

export const addBookmark = (payload: Bookmark): Action => {
  return {
    type: 'ADD_BOOKMARK',
    payload,
  }
}
