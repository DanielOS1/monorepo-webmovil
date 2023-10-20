// auth.dto.ts

export class AuthData {
    email: string;
    password: string;
  }
  


export class AuthResponse {
    success: boolean;
    token?: string; 
    message?: string;
  }
  