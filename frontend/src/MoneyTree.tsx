
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

type LandedCoin = {
  id: number
  left: number
  rotation: number
  size: number
}

function MoneyTree() {
  const [landedCoins, setLandedCoins] = useState<LandedCoin[]>([])

  function handleCoinLanding(coinId: number) {
    setLandedCoins((currentCoins) => {
      // Prevent the floor from filling up indefinitely.
      const nextId =
        currentCoins.length > 0
          ? currentCoins[currentCoins.length - 1].id + 1
          : 1

      const newCoin: LandedCoin = {
        id: nextId,
        left: 5 + Math.random() * 90,
        rotation: Math.random() * 180,
        size: 7 + Math.random() * 6,
      }

      // Keep the latest 50 coins visible.
      return [...currentCoins, newCoin].slice(-50)
    })
  }

  return (
    <div className="money-tree">
      <div className="money-tree-scene">
        <svg
          className="money-tree-svg"
          viewBox="0 0 600 450"
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
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient
              id="tree-gold-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#b77908" />
              <stop offset="45%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>

          <g
            fill="none"
            stroke="url(#tree-gold-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#tree-gold-glow)"
          >
            {/* Trunk */}
            <path d="M300 410 C286 360 300 320 300 275" />

            {/* Left branches */}
            <path d="M300 300 C260 270 220 240 175 185" />
            <path d="M240 255 C210 245 185 230 155 210" />
            <path d="M220 235 C220 195 205 165 190 130" />
            <path d="M175 185 C155 165 145 150 130 145" />
            <path d="M270 275 C260 225 265 185 245 145" />

            {/* Right branches */}
            <path d="M300 300 C350 260 395 230 445 175" />
            <path d="M360 260 C395 245 430 220 455 200" />
            <path d="M395 230 C400 190 420 160 435 130" />
            <path d="M445 175 C465 155 480 145 495 135" />
            <path d="M325 275 C340 230 350 190 365 155" />

            {/* Upper branches */}
            <path d="M300 275 C300 225 305 180 300 130" />
            <path d="M300 200 C275 175 265 145 260 110" />
            <path d="M305 190 C330 165 345 135 355 100" />
          </g>
        </svg>

        {/* Each branch coin falls independently. */}
        <div className="tree-coins">
          {coins.map((coin) => {
            const style = {
              '--coin-top': `${(coin.y / 450) * 100}%`,
              '--coin-left': `${(coin.x / 600) * 100}%`,
              '--coin-delay': `${(coin.id % 10) * 0.22}s`,
              '--coin-duration': `${3.2 + (coin.id % 4) * 0.3}s`,
              '--coin-drift': `${coin.id % 2 === 0 ? 1 : -1}`,
            } as CSSProperties

            return (
              <span
                className="tree-coin"
                key={coin.id}
                style={style}
                onAnimationIteration={() => handleCoinLanding(coin.id)}
              >
                <span className="tree-coin-face">$</span>
              </span>
            )
          })}
        </div>

        {/* Coins stay on the floor after landing. */}
        <div className="coin-floor" aria-hidden="true">
          {landedCoins.map((coin) => (
            <span
              className="floor-coin"
              key={coin.id}
              style={
                {
                  left: `${coin.left}%`,
                  '--floor-rotation': `${coin.rotation}deg`,
                  '--floor-size': `${coin.size}px`,
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
