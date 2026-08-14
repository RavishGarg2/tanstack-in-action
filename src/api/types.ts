export interface UserCardProps {
  item: User;
  onToggleGender: (userId: number, newGender: 'male' | 'female') => void;
  onPress?: () => void;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  image: string;
  email: string;
  role: string;
  company?: {
    title?: string;
    name?: string;
  };
}

export interface FetchPhotosResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}