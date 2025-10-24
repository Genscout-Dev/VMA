import { ReactNode } from 'react'
import './index.css'

interface ScrollableAreaProps {
  children: ReactNode
  maxHeight?: string
}

export default function ScrollableArea({ children, maxHeight = '100px' }: ScrollableAreaProps) {
  return (
    <div className="scrollable-area" style={{ maxHeight }}>
      {children}
    </div>
  )
}

