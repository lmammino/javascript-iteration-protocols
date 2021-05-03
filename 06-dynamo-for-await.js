import { DynamoDBClient, paginateListTables } from '@aws-sdk/client-dynamodb'

const client = new DynamoDBClient({})

for await (const page of paginateListTables({ client }, {})) {
  // page.TableNames is an array of table names
  for (const tableName of page.TableNames) {
    console.log(tableName)
  }
}
