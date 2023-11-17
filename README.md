# MCVE for TypeORM issues

_Issue:_ "Broken migrations for indices on TIMESTAMP WITH TIMEZONE Oracle Database columns"

Steps to run this project:

1. Run `npm i` command
2. Run `docker compose up -d` command
3. Run `npm start` command
   - This will create the table and insert the user record
4. Run `npm start` command, again
   - This will fail to run the migrations
