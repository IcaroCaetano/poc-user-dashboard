// components/SearchBar.tsx
import React, { useState } from "react"

type Props = {
  onSearch: (query: string) => void
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(input)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search by name or email"
        className="border p-2 rounded w-64"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}
