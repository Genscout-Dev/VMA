import { ReactNode } from 'react'
import './index.css'

interface ScrollableAreaProps {
  children: ReactNode
  maxHeight?: string
  className?: string
}

export default function ScrollableArea({ children, maxHeight, className = '' }: ScrollableAreaProps) {
  const style = maxHeight ? { maxHeight } : { height: '100%' }
  return (
    <div className={`scrollable-area ${className}`} style={style}>
      {children}
    </div>
  )
}

