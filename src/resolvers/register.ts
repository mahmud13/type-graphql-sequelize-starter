import { Resolver, Mutation, Query, Arg } from 'type-graphql'
import { User } from '../entities/User.model'
import { UserType, UserInput } from './UserType'
import { db } from '../db'

db.addModels([User])
@Resolver((_of) => UserType)
export class AuthResolver {
  @Mutation((_return) => UserType)
  async register (@Arg('input') input: UserInput): Promise<UserType> {
    const user = new User({
      color: input.color,
      combustible: input.combustible,
      km: input.km,
    })
    await user.save()
    return {
      id: user.id,
      color: user.color,
      combustible: user.combustible,
      km: user.km,
    }
  }

  @Mutation((_return) => Boolean)
  async deleteUser (@Arg('id') id: number): Promise<boolean> {
    const user = await User.findByPk(id)
    if (!user) {
      return false
    }
    await user.destroy()
    return true
  }

  @Query((_return) => [UserType])
  async users (): Promise<UserType[]> {
    const users = await User.findAll()
    return users.map(user => ({
      id: user.id,
      color: user.color,
      combustible: user.combustible,
      km: user.km,
    }))
  }
}
