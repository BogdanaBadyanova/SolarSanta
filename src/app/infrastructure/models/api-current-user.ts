export interface ApiCurrentUser {
  id: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  lastName: string;
  middleName: string | null;
}
