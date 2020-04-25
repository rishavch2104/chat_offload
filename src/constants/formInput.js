export const InputFields = Object.freeze({
  TEXT_INPUT: "TEXT_INPUT",
  NUMBER_INPUT: "NUMBER_INPUT",
  DATE_PICKER: "DATE_PICKER",
  BUTTONS: "BUTTON",
  RADIO: "RADIO"
});

export const formFields1 = [
  {
    type: InputFields.TEXT_INPUT,
    subType: "text",
    label: "First Name",
    key: "firstName",
    defaultValue: "",
    placeholder: "Enter your first name",
    validators: ["name", "required"]
  },
  {
    type: InputFields.TEXT_INPUT,
    subType: "text",
    label: "Last Name",
    defaultValue: "",
    key: "lastName",
    placeholder: "Enter your last name",
    validators: ["name", "required"]
  },
  {
    type: InputFields.TEXT_INPUT,
    label: "Username",
    defaultValue: "",
    key: "username",
    placeholder: "Enter your Username",
    validators: ["name", "required"]
  },

  {
    type: InputFields.DATE_PICKER,
    label: "Birthday",
    subType: "date",
    key: "birthday",
    defaultValue: "",
    placeholder: "Enter your Birthday",
    validators: ["birthday"]
  },
  {
    type: InputFields.RADIO,
    label: "Sex",
    defaultValue: "Male",
    key: "sex",
    placeholder: ["Male", "Female", "Transgender", "Other"]
  },
  {
    type: InputFields.NUMBER_INPUT,
    subType: "number",
    label: "Phone Number",
    defaultValue: "",
    key: "phoneNumber",
    placeholder: "Enter your Phone Number",
    validators: ["phone_number"]
  }
];
