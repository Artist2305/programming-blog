import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';
import { RootState, Thunk, Dispatch } from '../store';

export enum PageTitle {
  PROGRAMMING_BLOG = 'PROGRAMMING BLOG',
  TUTORIALS = 'TUTORIALS',
  HOWTO = 'HOWTO',
  ARTICLES = 'ARTICLES',
  NEWSTELLER = 'NEWSTELLER',
  CONTACT = 'CONTACT'
}

interface TitleState {
  pageTitle: PageTitle;
}
const initialState: TitleState = {
  pageTitle: PageTitle.PROGRAMMING_BLOG
}

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<PageTitle>) => {
      const { payload } = action;
      state.pageTitle = payload;
    }
  }
});

export default titleSlice.reducer;

export const titleSelector = (state: RootState) => state.title;

//Actions
const { setPageTitle } = titleSlice.actions;

// Thunks
export const changePageTitle = (title: string): Thunk => (dispatch: Dispatch) => {
  const { pageTitle } = store.getState().title;
  let mode = pageTitle;
  switch (title) {
    case (PageTitle.PROGRAMMING_BLOG):
      mode = PageTitle.PROGRAMMING_BLOG;
      break;
    case (PageTitle.TUTORIALS):
      mode = PageTitle.TUTORIALS;
      break;
    case (PageTitle.HOWTO):
      mode = PageTitle.HOWTO;
      break;
    case (PageTitle.ARTICLES):
      mode = PageTitle.ARTICLES;
      break;
    case (PageTitle.NEWSTELLER):
      mode = PageTitle.NEWSTELLER;
      break;
    case (PageTitle.CONTACT):
      mode = PageTitle.CONTACT;
      break;
  }

  dispatch(setPageTitle(mode));
}