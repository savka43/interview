import { fakerRU as faker } from "@faker-js/faker";

faker.seed(42);

const clients = faker.helpers.multiple(
  (_, i) => {
    const sex = faker.person.sexType();
    return {
      id: i + 1,
      firstName: faker.person.firstName(sex),
      lastName: faker.person.lastName(sex),
      city: faker.location.city(),
      profession: faker.person.jobTitle(),
      age: faker.number.int({ min: 18, max: 99 }),
    };
  },
  { count: 100 },
);

export default defineEventHandler(() => {
  return clients;
});
