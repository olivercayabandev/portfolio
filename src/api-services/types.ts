// User and Authentication related types
export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  role: 'super_admin' | 'admin' | 'guest';
  status: 'active' | 'suspended';
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface UpdatePasswordRequest {
  token: string;
  password: string;
}

// API Response wrappers
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

// Error types
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface UpdateProfileRequest {
  bio?: string;
}
