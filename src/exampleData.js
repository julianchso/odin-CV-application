import { v4 as uuidv4 } from 'uuid';

const exampleData = {
  personalInfo: {
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '0118 999 881 999 119 725 3',
    location: 'London, UK',
  },

  experience: [
    {
      position: 'software engineer',
      company: 'Google',
      startDate: '2015-09',
      endDate: '2018-05',
      location: 'San Francisco, California',
      description:
        '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis dolor quis ultrices sollicitudin. <btMorbi sapien odio, dictum id dolor at, consequat lobortis nibh. Nunc non iaculis massa. Suspendisse ut turpis dui. Nunc ut eleifend augue. Suspendisse ut imperdiet dui, vitae sodales diam. Sed et tempus augue, quis gravida lectus. Curabitur vestibulum est in mattis viverra. Integer ultrices velit egestas tellus dapibus viverra. Ut aliquam interdum dui eget vestibulum. Fusce vestibulum massa id mattis facilisis. Aenean augue dui, vehicula quis quam sed, mattis consequat justo.',
      id: uuidv4(),
    },
    {
      position: 'senior software engineer',
      company: 'Netflix',
      startDate: '2018-06',
      endDate: '2023-12',
      location: 'San Francisco, California',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis dolor quis ultrices sollicitudin. Morbi sapien odio, dictum id dolor at, consequat lobortis nibh. Nunc non iaculis massa. Suspendisse ut turpis dui. Nunc ut eleifend augue. Suspendisse ut imperdiet dui, vitae sodales diam. Sed et tempus augue, quis gravida lectus. Curabitur vestibulum est in mattis viverra. Integer ultrices velit egestas tellus dapibus viverra. Ut aliquam interdum dui eget vestibulum. Fusce vestibulum massa id mattis facilisis. Aenean augue dui, vehicula quis quam sed, mattis consequat justo.',
      id: uuidv4(),
    },
  ],

  education: [
    {
      school: 'Harvard University',
      degree: 'Bachelors of Computer Science',
      startDate: '2008-09',
      endDate: '2012-05',
      location: 'Cambridge, Massachusetts',
      id: uuidv4(),
    },
    {
      school: 'Columbia University',
      degree: 'Masters of Computer Science',
      startDate: '2013-09',
      endDate: '2015-05',
      location: 'New York, New York',
      id: uuidv4(),
    },
  ],
};

export default exampleData;
