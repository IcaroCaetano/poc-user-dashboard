import { User } from "../types/User"

const mockUsers: User[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `+55 11 99999-00${i + 1}`,
  website: `https://user${i + 1}.com`,
}))

export const getUsers = (page = 1, limit = 5): User[] => {
  const start = (page - 1) * limit
  return mockUsers.slice(start, start + limit)
}

export const getUserById = (id: number): User | undefined => {
  return mockUsers.find((u) => u.id === id)
}

export const addUser = (user: Omit<User, "id">): User => {
  const newUser = { ...user, id: mockUsers.length + 1 }
  mockUsers.push(newUser)
  return newUser
}
