import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: "localhost",
  port: 1521,
  schema: "TEST",
  username: "TEST",
  password: "test",
  serviceName: "TEST",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
