
import { useState } from 'react'
import type { CSSProperties } from 'react'
import './MoneyTree.css'

const coins = [
  { id: 1, x: 130, y: 145 },
  { id: 2, x: 150, y: 170 },
  { id: 3, x: 165, y: 195 },
  { id: 4, x: 190, y: 220 },
  { id: 5, x: 215, y: 245 },
  { id: 6, x: 190, y: 130 },
  { id: 7, x: 205, y: 165 },
  { id: 8, x: 218, y: 200 },
  { id: 9, x: 245, y: 240 },
  { id: 10, x: 245, y: 145 },
  { id: 11, x: 255, y: 175 },
  { id: 12, x: 265, y: 205 },
  { id: 13, x: 260, y: 110 },
  { id: 14, x: 280, y: 150 },
  { id: 15, x: 300, y: 130 },
  { id: 16, x: 300, y: 175 },
  { id: 17, x: 305, y: 215 },
  { id: 18, x: 355, y: 100 },
  { id: 19, x: 350, y: 140 },
  { id: 20, x: 340, y: 180 },
  { id: 21, x: 330, y: 220 },
  { id: 22, x: 365, y: 155 },
  { id: 23, x: 380, y: 185 },
  { id: 24, x: 395, y: 215 },
  { id: 25, x: 415, y: 235 },
  { id: 26, x: 435, y: 130 },
  { id: 27, x: 455, y: 145 },
  { id: 28, x: 445, y: 175 },
  { id: 29, x: 425, y: 200 },
  { id: 30, x: 400, y: 230 },
]

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: 30 + ((index * 37) % 540),
  y: 30 + ((index * 29) % 350),
  delay: `${(index % 8) * -0.6}s`,
  duration: `${3 + (index % 5)}s`,
  size: 2 + (index % 3),
}))

type LandedCoin = {
  id: number
  x: number
  rotation: number
  size: number
  drift: number
}

function MoneyTree() {
  const [landedCoins, setLandedCoins] = useState<LandedCoin[]>([])

  function handleCoinLanding() {
    setLandedCoins((current) => {
      const nextId =
        current.length > 0
          ? Math.max(...current.map((coin) => coin.id)) + 1
          : 1

      const newCoin: LandedCoin = {
        id: nextId,
        x: 20 + Math.random() * 560,
        rotation: Math.random() * 180,
        size: 7 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 12,
      }

      return [...current, newCoin].slice(-70)
    })
  }

  return (
    <div className="money-tree">
      <div className="money-tree-scene">
        <div className="tree-ambient" aria-hidden="true" />

        <svg
          className="money-tree-svg"
          viewBox="0 0 600 450"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="A glowing golden money tree with falling coins"
        >
          <defs>
            <filter
              id="tree-gold-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="tree-gold-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5e12" />
              <stop offset="25%" stopColor="#eab308" />
              <stop offset="52%" stopColor="#fff1a6" />
              <stop offset="75%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>

            <linearGradient id="trunk-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#713f12" />
              <stop offset="35%" stopColor="#d99008" />
              <stop offset="52%" stopColor="#fff1a6" />
              <stop offset="72%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>

            <radialGradient id="coin-gold-gradient" cx="30%" cy="25%" r="80%">
              <stop offset="0%" stopColor="#fffde0" />
              <stop offset="25%" stopColor="#fff1a6" />
              <stop offset="55%" stopColor="#facc15" />
              <stop offset="82%" stopColor="#d99008" />
              <stop offset="100%" stopColor="#854d0e" />
            </radialGradient>
          </defs>

          {/* Tree trunk */}
          <g className="tree-sway">
            <g
              fill="none"
              stroke="url(#trunk-gold)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#tree-gold-glow)"
            >
              <path d="M300 415 C286 370 298 324 300 275" />
            </g>

            {/* Broad, organic branches */}
            <g
              className="tree-branches"
              fill="none"
              stroke="url(#tree-gold-gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#tree-gold-glow)"
            >
              <path d="M300 300 C260 270 220 240 175 185" />
              <path d="M175 185 C150 155 128 135 95 112" />
              <path d="M175 185 C145 177 120 164 100 148" />
              <path d="M240 255 C210 245 185 230 155 210" />
              <path d="M220 235 C220 195 205 165 190 130" />
              <path d="M190 130 C180 110 165 92 150 78" />
              <path d="M270 275 C260 225 265 185 245 145" />
              <path d="M245 145 C230 120 225 95 220 75" />

              <path d="M300 300 C350 260 395 230 445 175" />
              <path d="M445 175 C465 155 480 145 505 125" />
              <path d="M360 260 C395 245 430 220 455 200" />
              <path d="M455 200 C480 188 500 174 520 158" />
              <path d="M395 230 C400 190 420 160 435 130" />
              <path d="M435 130 C450 105 465 90 485 75" />
              <path d="M325 275 C340 230 350 190 365 155" />
              <path d="M365 155 C375 125 390 100 405 82" />

              <path d="M300 275 C300 225 305 180 300 130" />
              <path d="M300 200 C275 175 265 145 260 110" />
              <path d="M305 190 C330 165 345 135 355 100" />
            </g>

            {/* Fine twigs */}
            <g
              fill="none"
              stroke="url(#tree-gold-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M140 150 L120 125 L105 120" />
              <path d="M160 177 L140 170 L125 151" />
              <path d="M190 145 L175 122 L173 106" />
              <path d="M225 210 L225 190 L214 175" />
              <path d="M250 190 L240 169 L240 155" />
              <path d="M265 155 L250 140 L247 123" />

              <path d="M380 245 L402 225 L410 205" />
              <path d="M415 213 L440 200 L448 185" />
              <path d="M435 150 L450 130 L470 120" />
              <path d="M365 175 L375 150 L390 140" />
              <path d="M330 160 L345 140 L347 125" />
              <path d="M300 155 L290 138 L290 120" />
            </g>

            {/* Trunk highlights */}
            <g
              fill="none"
              stroke="#fff1a6"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            >
              <path d="M296 390 Q291 365 297 345" />
              <path d="M301 326 Q305 308 302 292" />
            </g>
          </g>

          {/* Floating particles use the same SVG coordinate system */}
          <g className="tree-particles" aria-hidden="true">
            {particles.map((particle) => (
              <circle
                key={particle.id}
                className="tree-particle"
                cx={particle.x}
                cy={particle.y}
                r={particle.size / 2}
                style={
                  {
                    '--particle-delay': particle.delay,
                    '--particle-duration': particle.duration,
                  } as CSSProperties
                }
              />
            ))}
          </g>

          {/* Coins attached to the branches and falling */}
          <g className="tree-coins">
            {coins.map((coin) => {
              const style = {
                '--coin-left': `${coin.x}px`,
                '--coin-top': `${coin.y}px`,
                '--coin-delay': `${(coin.id % 10) * 0.22}s`,
                '--coin-duration': `${3.2 + (coin.id % 4) * 0.3}s`,
                '--coin-drift': `${coin.id % 2 === 0 ? 1 : -1}`,
              } as CSSProperties

              return (
                <foreignObject
                  key={coin.id}
                  x={coin.x - 7}
                  y={coin.y - 7}
                  width="14"
                  height="14"
                  className="coin-foreign-object"
                  style={style}
                  onAnimationIteration={handleCoinLanding}
                >
                  <div className="tree-coin" xmlns="http://www.w3.org/1999/xhtml">
                    <span className="tree-coin-face">
                      <span className="coin-symbol">$</span>
                    </span>
                  </div>
                </foreignObject>
              )
            })}
          </g>
        </svg>

        {/* Ground and accumulated coins */}
        <div className="coin-floor" aria-hidden="true">
          {landedCoins.map((coin) => (
            <span
              className="floor-coin"
              key={coin.id}
              style={
                {
                  left: `${(coin.x / 600) * 100}%`,
                  '--floor-rotation': `${coin.rotation}deg`,
                  '--floor-size': `${coin.size}px`,
                  '--floor-drift': `${coin.drift}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoneyTree
