import { constraints } from "../validationHooks/constraints";

const en = {
  translations: {
    auth: {
      logIn: "Log in",
      logOut: "Log out",
      email: "Email",
      password: "Password",
      register: "Register user",
      switchToLogin: "Switch to login",
      switchToRegister: "Switch to register",
      confirmPassword: "Confirm password",
      firstName: "First name",
      lastName: "Last name",
      dateOfBirth: "Date of birth",
      club: "Orienteering club",
    },
    competition: {
      createCompetition: "Create Competition",
      selectClass: "Select Classes",
      competitonNameLabel: "Name of the competition",
      competitionDescriptionLabelText: "Description of the competition",
      dateOfCompetitionLabelText: "Date of competition",
      competitionPlaceText: "Place of the competition",
      createCompetitionText: "Create competition",
      competitionCreatedSuccessfullyText: "Competition created",
      userRegisteredSuccessfully:
        "User registered successfully, redirecting to login...",
    },
    global: {
      ukraineOEvent: "Ukraine O-Event",
      invalidDate: "Date is invalid",
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
      email: "Імейл",
      password: "Пароль",
      register: "Зареєструватись",
      switchToLogin: "Перейти до логіну",
      switchToRegister: "Перейти до реєстрації",
      confirmPassword: "Підтвердити пароль",
      firstName: "Ім'я",
      lastName: "Прізвище",
      dateOfBirth: "Дата народження",
      club: "Клуб",
      userRegisteredSuccessfully:
        "Користувача зареєстровано, повертаємось на логін...",
    },
    competition: {
      createCompetition: "Створити змагання",
      selectClass: "Оберіть групи",
      competitonNameLabel: "Назва змагання",
      competitionDescriptionLabelText: "Опис змагання",
      dateOfCompetitionLabelText: "Дата змагання",
      competitionPlaceText: "Місце проведення",
      createCompetitionText: "Створити змагання",
      competitionCreatedSuccessfullyText: "Змагання створено!",
    },
    global: {
      ukraineOEvent: "Ukraine O-Event",
      invalidDate: "Невірна дата",
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
        placeMore: `Назва місця повинна бути коротше ${constraints.placeMax} символів`,
      },
    },
  },
};

export const languages = {
  en,
  ua,
};
