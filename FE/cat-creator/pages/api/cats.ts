import axios from 'axios';
import Cat from '../../cats';

export const createCat = async (cat: Cat) => {
  const response = await axios.post(`/cats`, cat);
  return response.data;
}

export const getCats = async () => {
  const response = await axios.get(`/cats`);
  return response.data;
}

export const updateCat = async (cat: Cat) => {
  const { id } = cat;
  const response = await axios.put(`/cats/${id}`, cat);
  return response.data;
}

export const deleteCat = async (catId: number) => {
  const response = await axios.delete(`/cats/${catId}`);
  return response.data;
}