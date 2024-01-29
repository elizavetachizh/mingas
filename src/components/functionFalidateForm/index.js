export function isValidatePhone(phone) {
  return /\+375\d{2}\d{3}\d{2}\d{2}/g.test(phone);
}

export const isValidateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(
        email
    );
};

export const stringIncludesNumber = (string) => {
    return /\d/.test(string);
};
