import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        firstName: 'Hector',
        lastName: 'Posada',
        email: 'hposada@arkusnexus.com',
        age: 28,
        occupation: 'developer',
      },
    ])
  }
}
