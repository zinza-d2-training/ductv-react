export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
}

export interface myToken {
  user_id: number;
  exp: Date;
}

// An interface for our state
export interface CounterState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
}

export interface UserCtx {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
  signIn: (email: string, password: string) => Promise<void>;
}

export interface UserList extends User {
  username: string;
}
