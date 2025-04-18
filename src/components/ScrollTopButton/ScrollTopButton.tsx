import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Button } from "./styles";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)
  
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    if (!isVisible) return null
  
    return (
      <Button onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </Button>
    )
  }