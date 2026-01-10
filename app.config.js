export default ({ config }) => ({
  ...config,

  android: {
    package: "com.chaaanuwu.farmpal",
    googleServicesFile: "./google-services.json",
  },

  extra: {
    FIREBASE_WEB_CLIENT_ID: process.env.FIREBASE_WEB_CLIENT_ID,
  },
});