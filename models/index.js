const User = require('./User');
const Wall = require('./Wall');

Wall.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User };