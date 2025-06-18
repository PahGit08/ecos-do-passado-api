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
        },
        email: {
            type: 'varchar'
        },
        createdAt: {
            type: "datetime",
            createDate: true
        },
        password: {
            type: 'varchar'
        }
    },
    relations: {
        reports: {
            target: 'Reports',
            type: "one-to-Many",
            inverseSide: 'createdBy'
        }
    }
})