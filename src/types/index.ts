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

interface DataHref {
  title: string;
  link: string;
  key: number;
}

export interface DataLink {
  data?: DataHref[];
}

// Type for address
export interface GeneralInfoAddress {
  id: number;
  name: string;
}

export interface Ward extends GeneralInfoAddress {}

export interface District extends GeneralInfoAddress {
  wards?: Ward[];
}

export interface Province extends GeneralInfoAddress {
  districts?: District[] | null;
}

export interface DataTable {
  index: number;
  address: string;
  street: string;
  ward: Ward;
  district: District;
  province: Province;
  boardMember: string;
  countTableInjection: number;
}

export interface Column {
  id:
    | 'index'
    | 'address'
    | 'street'
    | 'ward'
    | 'district'
    | 'province'
    | 'boardMember'
    | 'countTableInjection';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
}
