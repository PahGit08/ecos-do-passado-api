const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: 'Reports',
    tableName: 'reports',
    columns: {
        reportId: {
            primary: true,
            type: "integer",
            generated: true
        },
        title: {
            type: 'varchar'
        },
        createdAt: {
            type: "datetime",
            createDate: true
        },
    },
    relations: {
        users: {
            target: 'User',
            type: "one-to-many",
            inverseSide: 'createdBy'
        }
    }
})