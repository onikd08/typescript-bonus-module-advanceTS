// interface with Methods

interface IMethods {
  getFullName(): string;
}

// interface with Properties

interface IProperties {
  firstName: string;
  lastName: string;
}

// Now combine them in a single type using generic interface

interface Model<TProps, TMethods> {
  properties: TProps;
  methods: TMethods;
}

type ModelType = Model<IProperties, IMethods>;

// Now implement the class

class User implements ModelType {
  properties: IProperties;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.properties = { firstName, lastName };
    this.methods = {
      getFullName() {
        return firstName + " " + lastName;
      },
    };
  }
}

const user1 = new User("John", "Doe");
console.log(user1.methods.getFullName());
