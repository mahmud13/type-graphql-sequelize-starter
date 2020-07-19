import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript'

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  km: number;

  @Column
  combustible: string;

  @Column
  color: string;
}
