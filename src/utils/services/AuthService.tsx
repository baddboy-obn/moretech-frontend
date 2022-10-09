import React, { FC, PropsWithChildren } from 'react';

export const AuthService: FC<PropsWithChildren> = ({ children }) => {
  // useEffect(() => {
  //   webAPI.personMethods.getPersons().then((r) => {
  //     console.log(r);
  //   });
  // }, []);

  return <>{children}</>;
};
