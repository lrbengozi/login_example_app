type AuthResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export function signIn(email: string, password: string): Promise<AuthResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sjlkdhsdkjfhkjsdfhsdkjfhsdkfd',
        user: {
          name: 'Luiz',
          email: 'email@email.com',
        },
      });
    }, 2000);
  });
}
