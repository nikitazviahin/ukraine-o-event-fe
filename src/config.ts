export const appConfig = {
  apiBaseUrl: process.env.REACT_APP_BASE_BACKEND_URL,
  constraints: {
    passwordMin: 6,
    passwordMax: 32,
    firstNameMax: 50,
    lastNameMax: 50,
    orienteeringClubMax: 100,
    competitionNameMax: 100,
    competitionDescriptionMax: 5000,
    placeMax: 100,
  },
};
