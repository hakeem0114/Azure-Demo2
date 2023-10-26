import { app } from '@azure/functions';
import { TableService, createTableIfNotExists, insertEntity } from 'azure-storage';

const tableService = new TableService({
  accountName: 'myfirststaticwebappdb1',
  accountKey: 'NH1n/s1C+f6n5F7SXMkABKiPDpDvwjZTpTNhbmG/StY5lAA9g/anso49WABwLWteVK8M1+sn+NeF+AStLjxK6w==',
});

const tableName = 'UserTable';

app.http('registerUser', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const { email, password } = request.body;

        createTableIfNotExists(tableService, tableName, (error, result, response) => {
            if (!error) {
                const entity = {
                    PartitionKey: { _: 'Users' },
                    RowKey: { _: email },
                    password: { _: password }
                };

                insertEntity(tableService, tableName, entity, (error, result, response) => {
                    if (!error) {
                        context.res = {
                            status: 200,
                            body: "User registered successfully!"
                        };
                    } else {
                        context.res = {
                            status: 500,
                            body: "Error storing user data."
                        };
                    }
                    context.done();
                });
            } else {
                context.res = {
                    status: 500,
                    body: "Error creating table."
                };
                context.done();
            }
        });
    }
});
