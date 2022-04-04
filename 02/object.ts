enum Role { ADMIN = 'Admin', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'jgyy',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

const favoriteActivities: string[] = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.AUTHOR) {
  console.log('is author');
}
