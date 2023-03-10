const findTheOldest = function (people) {
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    if (
      currentAge > oldestAge ||
      oldestPerson === null ||
      oldestPerson.name === null
    ) {
      return currentPerson;
    } else {
      return oldestPerson;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
