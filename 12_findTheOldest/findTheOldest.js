const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Determine current year if the person is still alive
        const currentYear = (new Date()).getFullYear();
        
        // Calculate the age of each person
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        
        // Return the person with the greater age
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
