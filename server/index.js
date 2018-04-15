const faker = require('faker')

module.exports = () => ({
    products: Array
        .from({ length: 50 })
        .map(() => ({
            id: faker.random.uuid(),
            name: faker.commerce.product(),
            description: faker.lorem.paragraph(),
            price: faker.commerce.price(),
            image: "http://via.placeholder.com/170x210",
        }))
})