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
}
