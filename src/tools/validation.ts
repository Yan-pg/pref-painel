interface Props {
  email?: string;
  password?: string;
  name?: string;
  confirmPassword?: string;
}

interface PropsPost {
  imageDescription: string;
  title: string;
  category: string;
  contentPost: string;
  image: any;
}

export const isEmail = (email: string): boolean => {
  return (
    email.length > 0 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  );
};

export const isPassword = (password: string): boolean => {
  return password.length >= 4;
};

export const matchPassword = (
  password: string,
  passwordConfirm: string
): boolean => {
  return (
    isPassword(password) &&
    isPassword(passwordConfirm) &&
    password === passwordConfirm
  );
};

export const isName = (name: string): boolean => {
  return name.length > 2;
};

export const validateAll = ({
  email,
  name,
  password,
  confirmPassword,
}: Props): boolean => {
  const validationProps = [];

  if (email) {
    validationProps.push(isEmail(email));
  } else if (password) {
    validationProps.push(isPassword(password));
  } else if (name) {
    validationProps.push(isName(name));
  } else if (password && confirmPassword) {
    validationProps.push(isPassword(password));
    validationProps.push(isPassword(confirmPassword));
    validationProps.push(password === confirmPassword);
  }

  return !validationProps.includes(false);
};

export const validadeAllPost = ({
  category,
  imageDescription,
  contentPost,
  image,
  title,
}: PropsPost) => {
  return (
    category.length > 0 &&
    imageDescription.length > 0 &&
    contentPost.length > 0 &&
    image &&
    title.length > 0
  );
};
