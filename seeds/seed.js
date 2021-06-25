const sequelize = require('../config/connection');
// add other models below
const { User, Wall } = require('../models');
const userData = require('./userData.json');
const wallData = require('./wallData.json')

const seedDatabase = async () => {
    console.log('database here')
    await sequelize.sync({ force: true });

    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })
    await Wall.bulkCreate(wallData, {
        individualHooks: true,
        returning: true
    })
    process.exit(0);
}

seedDatabase();