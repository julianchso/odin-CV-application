import { v4 as uuidv4 } from 'uuid';

const exampleData = {
  personalInfo: {
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '0118 999 881 999 119 725 3',
    location: 'London, UK',
  },

  education: {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    id: uuidv4(),
  },
};

export default exampleData;
