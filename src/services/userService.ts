import { User } from "../types/User"

const mockUsers: User[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `+1 555-000-00${i + 1}`,
  website: `https://user${i + 1}.com`,
}))

// Function to generate a fake Lego avatar URL based on the user ID
const getRandomAvatar = (id: number) =>
  `https://randomuser.me/api/portraits/lego/${id % 10}.jpg`

export const getUsers = (page = 1, limit = 5): User[] => {
  const start = (page - 1) * limit
  // Include avatar field when returning users
  return mockUsers
    .slice(start, start + limit)
    .map(user => ({ ...user, avatar: getRandomAvatar(user.id) }))
}

export const getUserById = (id: number): User | undefined => {
  const user = mockUsers.find((u) => u.id === id)
  if (!user) return undefined

  return { ...user, avatar: getRandomAvatar(user.id) }
}

export const addUser = (user: Omit<User, "id">): User => {
  const newUser = { ...user, id: mockUsers.length + 1 }
  mockUsers.push(newUser)
  return { ...newUser, avatar: getRandomAvatar(newUser.id) }
}

// Function to delete a user by ID
export const deleteUserById = (id: number): boolean => {
  const index = mockUsers.findIndex(u => u.id === id)
  if (index === -1) return false
  mockUsers.splice(index, 1)
  return true
}
