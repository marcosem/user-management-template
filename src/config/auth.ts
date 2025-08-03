import { StringValue } from 'ms';

export default {
  jwt: {
    secret: `${process.env.APP_SECRET}`,
    expiresIn: '1d' as StringValue,
    refreshTokenExpiresIn: '60d' as StringValue,
  },
};
