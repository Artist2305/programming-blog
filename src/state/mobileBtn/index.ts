import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';
import { RootState, Thunk, Dispatch } from '../store';

export enum BtnIcon {
  OPEN = "open",
  CLOSE = "close"
}


interface BtnState {
  btnIcon: BtnIcon;
}

const initialState: BtnState = {
  btnIcon: BtnIcon.CLOSE
}

//Slice
const mobileBtnSlice = createSlice({
  name: 'mobileBtn',
  initialState,
  reducers: {
    setBtnIcon: (state, action: PayloadAction<BtnIcon>) => {
      const { payload } = action;
      state.btnIcon = payload;
    }
  }
});

//Reducers
export default mobileBtnSlice.reducer;

//Selectors 
export const mobileBtnSelector = (state: RootState) => state.mobileBtn;

//Actions
const { setBtnIcon } = mobileBtnSlice.actions;

// Thunks
export const toogleBtnIcon = (): Thunk => (dispatch: Dispatch) => {
  const { btnIcon } = store.getState().mobileBtn;
  const icon = btnIcon === BtnIcon.OPEN ? BtnIcon.CLOSE : BtnIcon.OPEN;

  dispatch(setBtnIcon(icon));
}
export const switchOffMenu = (): Thunk => (dispatch: Dispatch) => {
  const icon = BtnIcon.CLOSE;
  console.log(icon);
  dispatch(setBtnIcon(icon));
}