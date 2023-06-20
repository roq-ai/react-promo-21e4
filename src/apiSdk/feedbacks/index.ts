import axios from 'axios';
import queryString from 'query-string';
import { FeedbackInterface, FeedbackGetQueryInterface } from 'interfaces/feedback';
import { GetQueryInterface } from '../../interfaces';

export const getFeedbacks = async (query?: FeedbackGetQueryInterface) => {
  const response = await axios.get(`/api/feedbacks${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFeedback = async (feedback: FeedbackInterface) => {
  const response = await axios.post('/api/feedbacks', feedback);
  return response.data;
};

export const updateFeedbackById = async (id: string, feedback: FeedbackInterface) => {
  const response = await axios.put(`/api/feedbacks/${id}`, feedback);
  return response.data;
};

export const getFeedbackById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/feedbacks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFeedbackById = async (id: string) => {
  const response = await axios.delete(`/api/feedbacks/${id}`);
  return response.data;
};
