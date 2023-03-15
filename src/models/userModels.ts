export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserArrayModel {
  all_users: UserModel[];
}
