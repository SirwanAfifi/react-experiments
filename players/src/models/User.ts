import faker from "faker";

export enum JoinStatus {
  NotJoinedYet,
  Joined,
  Left,
}

interface User {
  user: string;
  joinStatus: JoinStatus;
  time: string;
  order: number;
}

class UserBuilder {
  generateUsers() {
    const users: User[] = [];
    Array.from({ length: 24 }, (value, index) => index).forEach((item) => {
      users.push({
        user: faker.name.findName(),
        joinStatus: Math.round(Math.random() * 2) as JoinStatus,
        time: this.time(new Date().getMilliseconds()),
        order: Math.round(Math.random() * 4),
      });
    });
    return users;
  }

  time(input: number) {
    return new Date(input * 1e3).toISOString().slice(-13, -5);
  }
}

export const userBuilder = new UserBuilder();
