import React, { useState } from "react"
import { searchBar } from "./SearchBar.styles"

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
    <form onSubmit={handleSubmit} className={searchBar.form}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search by name or email"
        className={searchBar.input}
      />
      <button type="submit" className={searchBar.button}>
        Search
      </button>
    </form>
  )
}
