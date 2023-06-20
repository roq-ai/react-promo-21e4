import axios from 'axios';
import queryString from 'query-string';
import { TrackInterface, TrackGetQueryInterface } from 'interfaces/track';
import { GetQueryInterface } from '../../interfaces';

export const getTracks = async (query?: TrackGetQueryInterface) => {
  const response = await axios.get(`/api/tracks${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTrack = async (track: TrackInterface) => {
  const response = await axios.post('/api/tracks', track);
  return response.data;
};

export const updateTrackById = async (id: string, track: TrackInterface) => {
  const response = await axios.put(`/api/tracks/${id}`, track);
  return response.data;
};

export const getTrackById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tracks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTrackById = async (id: string) => {
  const response = await axios.delete(`/api/tracks/${id}`);
  return response.data;
};
