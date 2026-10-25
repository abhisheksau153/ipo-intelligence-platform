
import type { CSSProperties } from 'react'
import './FloatingLeaves.css'

type Leaf = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  sway: number
  rotation: number
}

const leaves: Leaf[] = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: (index * 37 + 11) % 100,
  size: 8 + ((index * 7) % 9),
  duration: 10 + ((index * 3) % 7),
  delay: -((index * 5) % 16),
  drift: index % 2 === 0 ? 25 + ((index * 11) % 45) : -(20 + ((index * 13) % 40)),
  sway: 12 + ((index * 9) % 28),
  rotation: 180 + ((index * 47) % 360),
}))

function FloatingLeaves() {
  return (
    <div className="floating-leaves" aria-hidden="true">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="floating-leaf"
          viewBox="0 0 24 32"
          style={
            {
              '--leaf-left': `${leaf.left}%`,
              '--leaf-size': `${leaf.size}px`,
              '--leaf-duration': `${leaf.duration}s`,
              '--leaf-delay': `${leaf.delay}s`,
              '--leaf-drift': `${leaf.drift}px`,
              '--leaf-sway': `${leaf.sway}px`,
              '--leaf-rotation': `${leaf.rotation}deg`,
            } as CSSProperties
          }
        >
          <defs>
            <linearGradient
              id={`leaf-gradient-${leaf.id}`}
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>

          <path
            d="M12 1 C4 6 1 15 5 23 C7 28 11 31 12 31 C17 25 23 17 19 9 C17 5 14 2 12 1 Z"
            fill={`url(#leaf-gradient-${leaf.id})`}
            stroke="#86efac"
            strokeOpacity="0.45"
            strokeWidth="0.7"
          />
          <path
            d="M12 29 Q12 16 12 5"
            fill="none"
            stroke="#bbf7d0"
            strokeOpacity="0.65"
            strokeWidth="0.8"
          />
        </svg>
      ))}
    </div>
  )
}

export default FloatingLeaves
