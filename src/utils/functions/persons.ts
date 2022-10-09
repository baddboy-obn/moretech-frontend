import { IUserKey } from '../../api/person';

export const personKeyToString: (key: IUserKey) => string = (key) => {
  switch (key) {
    case 'manager':
      return 'Менеджер';
    case 'personal':
      return 'Сотрудник';
    case 'teamlead':
      return 'TeamLead';
  }
};
