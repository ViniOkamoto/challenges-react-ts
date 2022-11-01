import { InputHTMLAttributes } from 'react'
import { SearchBarContainer } from './styles'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function SearchBar(props: SearchBarProps) {
  return <SearchBarContainer {...props} />
}
