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

export const getUsers = (
  page = 1,
  limit = 5,
  query?: string
): User[] => {
  const normalizedQuery = query?.toLowerCase() || ""

  const filteredUsers = query
    ? mockUsers.filter(user =>
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery)
      )
    : mockUsers

  const start = (page - 1) * limit
  const paginatedUsers = filteredUsers.slice(start, start + limit)

  return paginatedUsers.map(user => ({
    ...user,
    avatar: getRandomAvatar(user.id)
  }))
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

export const deleteUserById = (id: number): boolean => {
  const index = mockUsers.findIndex(u => u.id === id)
  if (index === -1) return false
  mockUsers.splice(index, 1)
  return true
}

export const updateUser = (id: number, updatedData: Omit<User, "id">): User | null => {
  const index = mockUsers.findIndex(u => u.id === id)
  if (index === -1) return null

  const updatedUser = { ...mockUsers[index], ...updatedData }
  mockUsers[index] = updatedUser

  return { ...updatedUser, avatar: getRandomAvatar(updatedUser.id) }
}

export const searchUsers = (query: string): User[] => {
  const normalizedQuery = query.toLowerCase()
  return mockUsers
    .filter(user =>
      user.name.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery)
    )
    .map(user => ({ ...user, avatar: getRandomAvatar(user.id) }))
}
