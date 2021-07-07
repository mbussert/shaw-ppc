const User = require('./User');
const Wall = require('./Wall');
const Message = require('./Message')

Wall.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Wall)

module.exports = { User, Wall, Message };