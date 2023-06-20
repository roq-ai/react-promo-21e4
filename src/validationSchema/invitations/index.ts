import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  client_id: yup.string().nullable(),
  inviter_id: yup.string().nullable(),
});
