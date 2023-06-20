import * as yup from 'yup';

export const trackValidationSchema = yup.object().shape({
  title: yup.string().required(),
  file: yup.string().required(),
  client_id: yup.string().nullable(),
});
