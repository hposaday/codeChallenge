import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    try {
      const users = await User.all()

      return {
        success: true,
        message: 'Users retrieved succesfully',
        data: users,
      }
    } catch (error) {
      return {
        success: false,
        message: error,
        data: [],
      }
    }
  }

  public async store({ request }: HttpContextContract) {
    console.log(request.body(), 'body')
    try {
      const user = new User()

      await user.fill(request.body()).save()

      return {
        success: true,
        message: 'User created successfully',
        data: user,
      }
    } catch (error) {
      return {
        success: false,
        message: error,
        data: [],
      }
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)

      return {
        success: true,
        message: 'User retrieved successfully',
        data: user,
      }
    } catch (error) {
      return {
        success: false,
        message: error,
        data: [],
      }
    }
  }

  public async update({ request, params }: HttpContextContract) {
    console.log('update user handler')
    try {
      const user = await User.findOrFail(params.id)
      const updateData = request.only(['firstName', 'lastName', 'email', 'age', 'occupation'])
      await user.merge(updateData).save()

      return {
        success: true,
        message: 'user updated succesfully',
        data: user,
      }
    } catch (error) {
      return {
        success: false,
        message: error,
        data: [],
      }
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()

      return {
        success: true,
        message: 'User deleted succesfully',
        data: user,
      }
    } catch (error) {
      return {
        success: false,
        message: error,
        data: [],
      }
    }
  }
}
