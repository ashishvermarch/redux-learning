import {
  useSelector as _useSelector,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
