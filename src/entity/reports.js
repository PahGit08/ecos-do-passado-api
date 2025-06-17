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
        content: {
            type:"varchar"
        },
        description: {
            type:"varchar"
        }
    },
    relations: {
        createdBy: {
            target: 'User',
            type: "one-to-many",
            inverseSide: 'createdBy'
        }
    }
})