export interface ApiSignUpRequest {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName?: string | null;
  password: string | null;
}
