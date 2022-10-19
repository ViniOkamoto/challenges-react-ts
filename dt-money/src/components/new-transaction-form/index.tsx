import { useEffect, useState } from 'react'
import BottomSheet from './components/bottom-sheet'
import Modal from './components/modal'

export default function NewTransactionForm() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })
  console.log(isDesktop)
  return isDesktop ? <Modal /> : <BottomSheet />
}
