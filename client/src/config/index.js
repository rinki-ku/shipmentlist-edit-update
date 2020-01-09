
const freighthubPath = 'https://fregighthub.com';

export default {
  defaultPageSize: 5,
  redirect: {
    pageNotFound: `${freighthubPath}/404`,
    unauthorized: `${freighthubPath}/sign-in/#/403`,
    serverError: `${freighthubPath}/500`,
    externalUrl: `${freighthubPath}/sign-in/`,
  },
  externalServices: {
      shipmentUrl: 'http://localhost:3000/shipments',
  }
}