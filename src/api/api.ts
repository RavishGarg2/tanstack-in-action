import axios from 'axios';
import { FetchPhotosResponse, User } from './types';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
});

const fetchPhotos = async (
  limit: number = 10,
  skip: number = 0,
): Promise<FetchPhotosResponse> => {
  const response = await apiClient.get<FetchPhotosResponse>(
    `/users?limit=${limit}&skip=${skip}`,
  );
  return response.data;
};

const updateUserGender = async (
  userId: number,
  newGender: 'male' | 'female',
): Promise<User> => {
  const response = await apiClient.patch<User>(`/users/${userId}`, {
    gender: newGender,
  });
  return response.data;
};

const fetchUserById = async (userId: number): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${userId}`);
  return response.data;
};

export { apiClient, fetchPhotos, updateUserGender, fetchUserById };
