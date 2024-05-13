import { faker } from "@faker-js/faker";

export const users = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName().toLowerCase(),
  }));

export const fetchUsers = async (searchStr) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const result = users.filter((user) => {
        return user.name.includes(searchStr);
      });
      resolve(result);
    }, 1000)
  );
};


