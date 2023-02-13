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
  | {
      type: 'DELETE_ALL_BOOKMARKS'
    }
  | {
      type: 'DELETE_BOOKMARK'
      payload: string
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
    case 'DELETE_ALL_BOOKMARKS':
      return {
        ...state,
        bookmarks: {},
      }
    case 'DELETE_BOOKMARK':
      const updatedBookmarks = { ...state.bookmarks }
      delete updatedBookmarks[action.payload]

      return {
        ...state,
        bookmarks: updatedBookmarks,
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

export const deleteBookmarks = (): Action => {
  return {
    type: 'DELETE_ALL_BOOKMARKS',
  }
}

export const deleteBookmark = (payload: string): Action => {
  return {
    type: 'DELETE_BOOKMARK',
    payload,
  }
}
