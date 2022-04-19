export enum commonActionTypes {
  SET_LOADING = 'SET_LOADING'
}

export type Image = {
  alt: string;
  src: string;
}

export type CommonState = {
  loading: boolean;
}

export type CommmonAction = {
  type: commonActionTypes;
  payload: {
    loading: boolean;
  }
}
