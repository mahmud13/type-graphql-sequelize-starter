import { Sequelize } from 'sequelize-typescript'
import { User } from './entities/User.model'
export const db = new Sequelize({
  database: 'drfmb',
  username: 'drfmb',
  password: '6ZDL-,aWQV4{n_gB',
  host: 'maria_db',
  dialect: 'mariadb',
  models: [User],
})
