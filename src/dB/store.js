// //Moves to azure functions

// import { TableService, createTableIfNotExists, insertEntity } from 'azure-storage';

// const tableService = new TableService();
// const tableName = 'UserTable';

// export default async function (context, req) {

//     context.log(`Http function processed request for url "${req.url}"`);
//     const { email, password } = req.body;

//     createTableIfNotExists(tableService, tableName, (error, result, response) => {
//         if (!error) {
//             const entity = {
//                 PartitionKey: { _: 'Users' },
//                 RowKey: { _: email },
//                 password: { _: password }
//             };

//             insertEntity(tableService, tableName, entity, (error, result, response) => {
//                 if (!error) {
//                     context.res = {
//                         status: 200,
//                         body: "User registered successfully!"
//                     };
//                 } else {
//                     context.res = {
//                         status: 500,
//                         body: "Error storing user data."
//                     };
//                 }
//                 context.done();
//             });
//         } else {
//             context.res = {
//                 status: 500,
//                 body: "Error creating table."
//             };
//             context.done();
//         }
//     });
// }
