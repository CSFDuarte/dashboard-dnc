import React, { createContext, useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const PeopleContext = createContext();

const possibleSpecities = [
  'React',
  'Vue',
  'Angular',
  'Node',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'PHP',
  'SQL',
  'NoSQL',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Google Cloud',
  'Firebase',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'MariaDB',
]

const possibleCities = [
  'São Paulo - SP',
  'Rio de Janeiro - RJ',
  'Belo Horizonte - MG',
  'Porto Alegre - RS',
  'Curitiba - PR',
  'Recife - PE',
  'Fortaleza - CE',
  'Salvador - BA',
  'Brasília - DF',
  'Goiânia - GO',
  'Cuiabá - MT',
  'Campo Grande - MS',
  'Florianópolis - SC',
  'Vitória - ES',
  'Natal - RN',
  'João Pessoa - PB',
  'Aracaju - SE',
  'Maceió - AL',
  'Teresina - PI',
  'Boa Vista - RR',
  'Manaus - AM',
  'Belém - PA',
  'Macapá - AP',
  'Palmas - TO',
  'Porto Velho - RO',
]

const generateRandomPeople = (num) => {
  const people = [];
  for (let i = 0; i < num; i++) {
    people.push({
      id: i + 1,
      name: faker.person.fullName(),
      profilePic: faker.image.avatar(),
      specialties: faker.helpers.arrayElements(possibleSpecities, { min: 1, max: 5 }),
      city: faker.helpers.arrayElement(possibleCities),
      experience: Math.floor(Math.random() * 20) + 1
    });
  }
  return people;
};

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const people = generateRandomPeople(20);
    if (people) {
      setPeople(people);
      setCurrentUser(people[0]);
    }
  }, [])

  return (
    <PeopleContext.Provider value={{ people, currentUser, setCurrentUser }}>
      {currentUser && children}
    </PeopleContext.Provider>
  );
};

export { PeopleContext, PeopleProvider };
