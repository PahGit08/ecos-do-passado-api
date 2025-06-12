const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        userId: {
            primary: true,
            type: "integer",
            generated: true
        },
        name: {
            type: 'varchar'
        }
    }
})