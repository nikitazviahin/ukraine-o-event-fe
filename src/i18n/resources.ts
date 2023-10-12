import { constraints } from "../validationHooks/constraints";

const en = {
  translations: {
    auth: {
      logIn: "Log in",
      logOut: "Log out",
    },
    competition: {
      createCompetition: "Create Competition",
    },
    global: {
      ukraineOEvent: "Ukraine O-Event",
    },
    errors: {
      global: {
        invalidDate: "Invalid date entered",
      },
      login: {
        emailIsRequired: "Email is required",
        emailIsInvalid: "Email is invalid",
        passwordIsRequired: "Password is required",
        passwordMore: `Password must be more than ${constraints.passwordMin} characters`,
        passwordLess: `Password must be less than ${constraints.passwordMax} characters`,
      },
      register: {
        emailIsRequired: "Email is required",
        emailIsInvalid: "Email is invalid",
        passwordIsRequired: "Password is required",
        passwordMore: `Password must be more than ${constraints.passwordMin} characters`,
        passwordLess: `Password must be less than ${constraints.passwordMax} characters`,
        passwordConfirm: "Please confirm your password",
        firstNameRequired: "First name is required",
        lastNameRequired: "Last name is required",
        firstNameLess: `First name must be less than ${constraints.firstNameMax} characters`,
        lastNameLess: `Last name must be less than ${constraints.lastNameMax} characters`,
        orienteeringClubLess: `Orienteering club name must be less than ${constraints.orienteeringClubMax} characters`,
        passwordDoNotMatch: "Passwords do not match",
      },
      createCompetition: {
        nameIsRequired: "Competition name is required",
        nameMore: `Competition name should be less than ${constraints.competitionNameMax} characters`,
        descriptionIsRequired: "Competition description is required",
        descriptionMore: `Competition description should be less than ${constraints.competitionDescriptionMax} characters`,
        placeIsRequired: "Competition place is required",
        placeMore: `Place name should be less than  ${constraints.placeMax} characters`,
      },
    },
  },
};

const ua = {
  translations: {
    auth: {
      logIn: "Вхід",
      logOut: "Вийти",
    },
    competition: {
      createCompetition: "Створити змагання",
    },
    global: {
      ukraineOEvent: "Ukraine O-Event",
    },
    errors: {
      global: {
        invalidDate: "Невірна дата",
      },
      login: {
        emailIsRequired: "Введіть Імейл",
        emailIsInvalid: "Імейл не вірний",
        passwordIsRequired: "Введіть пароль",
        passwordMore: `Пароль повинен бути довше ${constraints.passwordMin} символів`,
        passwordLess: `Пароль повинен бути менше ${constraints.passwordMax} символів`,
      },
      register: {
        emailIsRequired: "Введіть Імейл",
        emailIsInvalid: "Імейл не вірний",
        passwordIsRequired: "Введіть пароль",
        passwordMore: `Пароль повинен бути довше ${constraints.passwordMin} символів`,
        passwordLess: `Пароль повинен бути менше ${constraints.passwordMax} символів`,
        passwordConfirm: "Введіть пароль",
        firstNameRequired: "Введіть ім'я",
        lastNameRequired: "Введіть прізвище",
        firstNameLess: `Ім'я повинно бути не довше ${constraints.firstNameMax} символів`,
        lastNameLess: `Прізвище повинно бути не довше ${constraints.lastNameMax} символів`,
        orienteeringClubLess: `Назва клубу повинна бути не довше ${constraints.orienteeringClubMax} символів`,
        passwordDoNotMatch: "Паролі не співпадають",
      },
      createCompetition: {
        nameIsRequired: "Введіть назву змагання",
        nameMore: `Назва змагання повинна бути менше ніж ${constraints.competitionNameMax} символів`,
        descriptionIsRequired: "Введіть опис змагання",
        descriptionMore: `Опис змагання повинен бути коротше ${constraints.competitionDescriptionMax} символів`,
        placeIsRequired: "Введіть назву місця проведення",
        plaseMore: `Назва місця повинна бути коротше ${constraints.placeMax} символів`,
      },
    },
  },
};

export const languages = {
  en,
  ua,
};
