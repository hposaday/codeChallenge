import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'firstName' })
  public firstName: string

  @column({ serializeAs: 'lastName' })
  public lastName: string

  @column()
  public email: string

  @column()
  public age: number

  @column()
  public occupation: string

  @column.dateTime({ serializeAs: null, autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ serializeAs: null, autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
