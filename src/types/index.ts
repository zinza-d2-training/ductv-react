export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: string;
}

export interface myToken {
  user_id: number;
  exp: Date;
}

export interface CountActionPayload {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
}

// An interface for our state
export interface CounterState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
}
// An enum with all the types of actions to use in our reducer
export enum CountActionType {
  INIT = 'INIT',
  LOGIN = 'LOGIN'
}

//An interface for our action
export interface CounterAction {
  type: CountActionType;
  payload: CountActionPayload;
}

export interface UserCtx {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
  method: string;
  login: (email: string, password: string) => Promise<void>;
}
