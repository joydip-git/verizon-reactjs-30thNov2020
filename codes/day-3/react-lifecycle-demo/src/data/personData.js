let personData = [
    {
        id: 1,
        name: 'anil',
        age: 20,
        location: 'bangalore'
    },
    {
        id: 2,
        name: 'sunil',
        age: 30,
        location: 'chennai'
    },
    {
        id: 3,
        name: 'mahesh',
        age: 40,
        location: 'hyderabad'
    }
]

export const getPeople = () => {
    return personData;
}

export const getPersonById = (id) => {
    return personData.find(p => p.id === id);
}

export const updatePeople = (newPersonArray) => {
    console.log(personData)
    personData = newPersonArray;
    console.log(personData)
}