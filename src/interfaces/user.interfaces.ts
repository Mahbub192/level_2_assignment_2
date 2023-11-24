import { Model } from 'mongoose'

type Order = {
  productName: string
  price: number
  quantity: number
}

export type TUser = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: 'active' | 'blocked'
  hobbies: string[]
  address: {
    street: string
    city: string
    country: string
  }
  orders?: Order[]
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>
  // eslint-disable-next-line no-unused-vars
  isUserNameExists(username: string): Promise<TUser | null>
}
