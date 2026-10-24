
import type { CSSProperties } from 'react'
import './MoneyTree.css'

type FallingCoin = {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  drift: number
  size: number
}

const COIN_WAIT_SECONDS = 0.2
const COIN_FADE_SECONDS = 0.3
const GROUND_Y = 408

const fallingCoins: FallingCoin[] = [
  { id: 1, x: 201, y: 91, delay: 1.2, duration: 6.0, drift: -45, size: 13 },
  { id: 2, x: 281, y: 89, delay: 3.4, duration: 6.5, drift: 32, size: 14 },
  { id: 3, x: 321, y: 88, delay: 2.1, duration: 6.2, drift: -38, size: 12 },
  { id: 4, x: 410, y: 91, delay: 4.5, duration: 6.4, drift: 48, size: 13 },
  { id: 5, x: 94, y: 128, delay: 2.7, duration: 6.3, drift: -60, size: 13 },
  { id: 6, x: 119, y: 164, delay: 0.8, duration: 5.9, drift: -32, size: 12 },
  { id: 7, x: 138, y: 201, delay: 3.1, duration: 6.5, drift: -43, size: 14 },
  { id: 8, x: 180, y: 136, delay: 0.5, duration: 6.0, drift: -24, size: 13 },
  { id: 9, x: 228, y: 124, delay: 1.4, duration: 6.3, drift: 30, size: 14 },
  { id: 10, x: 188, y: 206, delay: 2.9, duration: 6.4, drift: 43, size: 13 },
  { id: 11, x: 249, y: 177, delay: 4.7, duration: 6.1, drift: -19, size: 13 },
  { id: 12, x: 276, y: 158, delay: 1.9, duration: 6.0, drift: 29, size: 13 },
  { id: 13, x: 292, y: 235, delay: 4.3, duration: 6.2, drift: -26, size: 13 },
  { id: 14, x: 355, y: 128, delay: 3.2, duration: 6.0, drift: 36, size: 13 },
  { id: 15, x: 352, y: 179, delay: 1.1, duration: 6.4, drift: 34, size: 12 },
  { id: 16, x: 331, y: 205, delay: 4.6, duration: 6.3, drift: -42, size: 14 },
  { id: 17, x: 425, y: 158, delay: 0.3, duration: 6.1, drift: -32, size: 12 },
  { id: 18, x: 453, y: 171, delay: 3.9, duration: 6.5, drift: 42, size: 13 },
  { id: 19, x: 483, y: 163, delay: 1.6, duration: 6.0, drift: 64, size: 14 },
  { id: 20, x: 467, y: 193, delay: 4.4, duration: 6.3, drift: 29, size: 12 },
  { id: 21, x: 502, y: 158, delay: 2.2, duration: 6.2, drift: 54, size: 13 },
  { id: 22, x: 520, y: 143, delay: 0.7, duration: 6.1, drift: 43, size: 12 },
  { id: 23, x: 114, y: 313, delay: 1.3, duration: 6.1, drift: -18, size: 13 },
  { id: 24, x: 188, y: 295, delay: 3.6, duration: 6.2, drift: 14, size: 12 },
  { id: 25, x: 416, y: 295, delay: 2.4, duration: 6.0, drift: -14, size: 13 },
  { id: 26, x: 490, y: 315, delay: 4.3, duration: 6.3, drift: 18, size: 12 },
]

const particles = Array.from({ length: 22 }, (_, id) => ({
  id,
  x: 55 + ((id * 71) % 490),
  y: 45 + ((id * 43) % 300),
  delay: `${-((id % 8) * 0.65)}s`,
  duration: `${4 + (id % 4)}s`,
  size: 1 + (id % 3) * 0.45,
}))

function MoneyTree() {
  return (
    <div className="money-tree">
      <div className="money-tree-scene">
        <div className="tree-ambient" aria-hidden="true" />
        <div className="tree-glow-core" aria-hidden="true" />

        <svg
          className="money-tree-svg"
          viewBox="0 0 600 450"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Golden money tree with emerald foliage and falling coins"
        >
          <defs>
            <linearGradient id="mt-trunk" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#75400f" />
              <stop offset="22%" stopColor="#b87916" />
              <stop offset="46%" stopColor="#fff0ad" />
              <stop offset="60%" stopColor="#ffd447" />
              <stop offset="82%" stopColor="#b87813" />
              <stop offset="100%" stopColor="#6e390d" />
            </linearGradient>

            <linearGradient id="mt-branch" x1="0" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#fff5c4" />
              <stop offset="30%" stopColor="#ffdc69" />
              <stop offset="68%" stopColor="#e3a92e" />
              <stop offset="100%" stopColor="#8a5013" />
            </linearGradient>

            <linearGradient id="mt-leaf-dark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="55%" stopColor="#14532d" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>

            <linearGradient id="mt-leaf-green" x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            <linearGradient id="mt-leaf-highlight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>

            <radialGradient id="mt-coin" cx="28%" cy="22%" r="80%">
              <stop offset="0%" stopColor="#fffde7" />
              <stop offset="25%" stopColor="#ffe8a0" />
              <stop offset="57%" stopColor="#f5c62e" />
              <stop offset="82%" stopColor="#bd7b0c" />
              <stop offset="100%" stopColor="#74400d" />
            </radialGradient>

            <filter id="mt-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse
            cx="300"
            cy="402"
            rx="205"
            ry="12"
            fill="#60a5fa"
            opacity="0.025"
          />

          <g className="tree-sway">
            {/* Existing upper foliage */}
            <g className="tree-foliage">
              <path
                d="M205 132 C184 126 177 110 186 95 C193 81 207 76 224 82 C230 64 249 59 264 69 C279 79 276 96 264 108 C279 119 273 137 258 144 C243 151 224 144 216 133 C212 134 208 134 205 132 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.7"
                strokeWidth="1.2"
              />
              <path
                d="M200 113 C196 98 209 88 224 91 C238 75 257 83 259 98 C269 111 254 126 241 126 C226 140 209 129 200 113 Z"
                fill="url(#mt-leaf-green)"
                opacity="0.85"
              />

              <path
                d="M252 96 C240 81 247 63 264 58 C272 39 296 39 306 54 C324 43 345 52 348 69 C365 78 360 97 345 105 C342 122 321 130 305 119 C291 132 271 124 268 110 C261 108 256 103 252 96 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.65"
                strokeWidth="1.2"
              />
              <path
                d="M263 85 C264 69 282 58 296 69 C310 57 330 66 332 81 C343 93 328 106 315 104 C302 117 284 107 282 96 C271 99 265 93 263 85 Z"
                fill="url(#mt-leaf-green)"
                opacity="0.92"
              />

              <path
                d="M335 111 C326 94 339 78 356 78 C366 62 389 65 397 82 C416 82 427 98 418 113 C432 130 420 147 402 146 C391 162 370 157 361 145 C343 151 328 132 335 111 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.7"
                strokeWidth="1.2"
              />
              <path
                d="M346 111 C344 94 362 85 376 96 C389 83 407 94 405 109 C417 121 403 136 389 131 C375 144 357 133 356 121 Z"
                fill="url(#mt-leaf-green)"
                opacity="0.9"
              />

              <path
                d="M157 183 C144 168 151 150 169 146 C177 131 198 136 204 151 C222 154 226 174 212 185 C215 202 196 211 182 202 C166 207 153 198 157 183 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.65"
                strokeWidth="1.2"
              />
              <path
                d="M166 177 C163 163 179 153 191 163 C205 156 216 171 207 182 C199 195 181 191 176 184 Z"
                fill="url(#mt-leaf-highlight)"
                opacity="0.82"
              />

              <path
                d="M401 188 C390 174 399 156 415 154 C426 137 447 144 452 160 C470 165 474 183 460 194 C463 210 444 218 430 208 C414 214 399 203 401 188 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.65"
                strokeWidth="1.2"
              />
              <path
                d="M411 185 C409 169 426 160 437 170 C451 163 462 177 454 189 C445 201 428 198 422 191 Z"
                fill="url(#mt-leaf-green)"
                opacity="0.88"
              />

              <path
                d="M170 241 C159 231 166 216 179 215 C189 204 206 211 208 224 C221 235 212 250 199 251 C188 261 173 254 170 241 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.6"
                strokeWidth="1.1"
              />
              <path
                d="M179 238 C176 227 188 220 197 227 C207 230 206 242 196 245 Z"
                fill="url(#mt-leaf-highlight)"
                opacity="0.8"
              />

              <path
                d="M411 242 C402 229 412 215 426 215 C438 202 455 210 458 224 C471 235 462 249 449 251 C438 262 419 255 417 247 Z"
                fill="url(#mt-leaf-dark)"
                stroke="#22c55e"
                strokeOpacity="0.6"
                strokeWidth="1.1"
              />
              <path
                d="M420 238 C419 226 432 219 441 227 C451 232 446 243 438 245 Z"
                fill="url(#mt-leaf-green)"
                opacity="0.85"
              />

              {/* Additional left upper cluster */}
              <g className="foliage-cluster">
                <path
                  d="M165 151 C151 143 149 127 160 117 C160 99 177 91 191 100 C200 84 221 87 226 104 C244 105 253 119 245 134 C250 148 235 162 220 158 C209 170 191 166 184 157 C176 160 169 157 165 151 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.75"
                  strokeWidth="1.5"
                />
                <path
                  d="M164 135 C160 121 176 109 188 117 C196 101 215 104 219 119 C234 120 240 135 228 145 C214 156 200 148 194 143 C181 151 169 145 164 135 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.9"
                />
              </g>

              {/* Additional left middle cluster */}
              <g className="foliage-cluster">
                <path
                  d="M151 230 C137 222 140 204 153 197 C152 181 170 172 184 183 C197 171 215 180 215 196 C232 204 230 221 215 230 C212 246 192 250 180 240 C165 251 149 243 151 230 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.75"
                  strokeWidth="1.5"
                />
                <path
                  d="M154 219 C151 207 164 195 176 202 C185 187 202 193 204 207 C217 214 211 229 199 230 C188 241 173 232 169 227 C162 229 156 225 154 219 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.88"
                />
              </g>

              {/* Additional right upper cluster */}
              <g className="foliage-cluster">
                <path
                  d="M407 149 C393 141 395 125 408 117 C407 101 425 91 439 102 C452 88 472 97 473 113 C490 120 491 136 476 146 C478 162 460 171 447 161 C433 170 416 162 416 153 C412 153 409 151 407 149 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.75"
                  strokeWidth="1.5"
                />
                <path
                  d="M411 137 C408 124 423 113 436 121 C446 105 462 112 465 125 C478 132 470 146 458 147 C446 158 431 149 427 143 C420 147 414 143 411 137 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.9"
                />
              </g>

              {/* Additional right middle cluster */}
              <g className="foliage-cluster">
                <path
                  d="M402 233 C389 224 393 207 406 201 C406 184 423 177 437 187 C450 176 468 184 469 199 C485 207 483 223 469 232 C468 248 448 253 436 243 C423 253 406 245 406 237 C404 236 403 235 402 233 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.75"
                  strokeWidth="1.5"
                />
                <path
                  d="M407 222 C405 209 419 199 431 206 C442 192 459 199 461 212 C473 220 466 232 454 233 C442 243 428 235 423 229 C415 233 409 228 407 222 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.88"
                />
              </g>

              {/* NEW: leafy tip at the top of the trunk */}
              <g className="foliage-cluster foliage-tip">
                <path
                  d="M281 198
                     C270 190 272 176 282 170
                     C280 157 293 149 303 157
                     C313 149 326 158 325 171
                     C337 179 331 193 319 196
                     C310 207 296 205 290 199
                     C286 201 283 200 281 198 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.8"
                  strokeWidth="1.3"
                />
                <path
                  d="M284 187
                     C279 177 290 168 299 174
                     C306 163 319 169 319 180
                     C328 187 319 196 309 192
                     C300 199 289 194 284 187 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.9"
                />
              </g>

              {/* NEW: large leafy cluster on the lower-left branch */}
              <g className="foliage-cluster foliage-lower-left">
                <path
                  d="M119 326
                     C104 320 102 304 113 295
                     C110 280 125 268 139 276
                     C150 263 170 271 171 287
                     C187 291 191 307 178 318
                     C181 333 164 344 151 336
                     C140 348 121 341 119 326 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M118 315
                     C113 303 127 292 139 299
                     C148 285 164 291 164 303
                     C176 311 166 324 155 324
                     C145 335 131 327 127 322
                     C123 322 120 319 118 315 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.9"
                />
                <path
                  d="M125 307 Q138 300 148 308"
                  fill="none"
                  stroke="#86efac"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>

              {/* NEW: large leafy cluster on the lower-right branch */}
              <g className="foliage-cluster foliage-lower-right">
                <path
                  d="M429 326
                     C414 319 414 304 425 295
                     C422 280 437 269 451 277
                     C463 263 482 272 483 288
                     C499 292 502 308 489 319
                     C492 334 475 345 462 337
                     C450 349 431 341 429 326 Z"
                  fill="url(#mt-leaf-dark)"
                  stroke="#22c55e"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <path
                  d="M428 315
                     C423 303 437 292 449 299
                     C458 285 475 291 475 303
                     C487 311 477 324 466 324
                     C456 335 442 327 438 322
                     C434 322 430 319 428 315 Z"
                  fill="url(#mt-leaf-green)"
                  opacity="0.9"
                />
                <path
                  d="M436 307 Q449 300 459 308"
                  fill="none"
                  stroke="#86efac"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>

              {/* Small detached leaves */}
              <path d="M226 73 C217 60 220 47 229 39 C241 52 238 64 226 73 Z" fill="url(#mt-leaf-highlight)" />
              <path d="M363 72 C355 59 359 46 369 40 C379 53 375 65 363 72 Z" fill="url(#mt-leaf-green)" />
              <path d="M139 207 C129 195 133 183 143 178 C153 190 150 201 139 207 Z" fill="url(#mt-leaf-green)" />
              <path d="M468 211 C460 199 465 187 475 183 C484 196 479 206 468 211 Z" fill="url(#mt-leaf-highlight)" />
            </g>

            {/* Golden trunk */}
            <g className="tree-trunk">
              <path
                d="M286 405 C289 378 290 354 291 330 C291 307 296 284 296 263 C296 243 291 224 294 205 C296 190 300 179 302 170 C309 189 310 208 307 229 C305 250 309 272 309 294 C309 320 307 344 310 367 C312 383 316 397 320 405 Q303 411 286 405 Z"
                fill="url(#mt-trunk)"
                stroke="#ffe69a"
                strokeWidth="1.3"
                filter="url(#mt-glow)"
              />
              <g fill="none" stroke="#fff4bc" strokeLinecap="round" opacity="0.65">
                <path d="M298 393 C296 376 301 360 299 343" strokeWidth="1.8" />
                <path d="M300 330 C304 311 299 294 302 278" strokeWidth="1.5" />
                <path d="M298 258 C294 243 299 228 300 214" strokeWidth="1.3" />
                <path d="M291 379 Q296 370 294 360" strokeWidth="0.8" />
                <path d="M309 390 Q305 376 307 365" strokeWidth="0.9" />
              </g>
            </g>

            {/* Main branches */}
            <g
              className="tree-branches"
              fill="none"
              stroke="url(#mt-branch)"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#mt-glow)"
            >
              <path d="M294 337 C271 319 246 306 220 299 C195 292 171 293 150 301" strokeWidth="7" />
              <path d="M307 337 C331 317 357 305 385 300 C410 295 435 300 455 309" strokeWidth="7" />
              <path d="M296 294 C274 274 251 253 231 231 C208 207 185 191 158 178" strokeWidth="7.5" />
              <path d="M303 291 C328 268 349 247 370 225 C393 201 418 185 447 176" strokeWidth="7.5" />
              <path d="M298 260 C277 238 263 216 254 192 C247 174 246 156 251 139" strokeWidth="5.5" />
              <path d="M303 252 C321 231 337 207 347 183 C355 163 358 145 354 128" strokeWidth="5.5" />
              <path d="M300 211 C291 190 290 168 294 147 C297 130 306 114 316 101" strokeWidth="5" />
            </g>

            {/* Fine branches */}
            <g
              className="tree-branches-fine"
              fill="none"
              stroke="url(#mt-branch)"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M226 301 C207 282 187 273 166 272 C148 271 133 277 119 287" strokeWidth="3.5" />
              <path d="M190 292 C174 277 160 259 146 246 C132 235 117 232 103 238" strokeWidth="3" />
              <path d="M165 295 C145 293 128 299 113 309" strokeWidth="2.5" />
              <path d="M385 300 C404 280 425 271 447 274 C463 276 477 282 488 291" strokeWidth="3.5" />
              <path d="M420 295 C440 292 458 299 473 309" strokeWidth="2.5" />
              <path d="M426 286 C445 266 463 252 482 250 C495 249 505 254 513 262" strokeWidth="3" />
              <path d="M159 179 C139 179 122 171 108 158 C99 149 94 139 92 129" strokeWidth="3" />
              <path d="M207 211 C188 213 170 206 155 194 C143 184 136 170 135 157" strokeWidth="3.2" />
              <path d="M251 191 C233 178 219 160 211 141" strokeWidth="3" />
              <path d="M447 176 C466 166 480 151 487 133" strokeWidth="3" />
              <path d="M393 202 C415 207 435 200 450 186" strokeWidth="3.2" />
              <path d="M348 183 C365 166 376 148 380 130" strokeWidth="3" />
              <path d="M251 139 C239 126 234 111 237 97" strokeWidth="2.5" />
              <path d="M294 147 C281 133 274 119 275 103" strokeWidth="2.5" />
              <path d="M316 101 C326 87 338 78 351 73" strokeWidth="2.5" />
              <path d="M354 128 C367 114 374 99 373 85" strokeWidth="2.5" />
            </g>

            {/* Twig tips */}
            <g fill="none" stroke="#ffe6a0" strokeWidth="1.8" strokeLinecap="round">
              <path d="M92 129 L88 117 L91 107" />
              <path d="M108 158 L95 154 L88 145" />
              <path d="M135 157 L130 144 L133 134" />
              <path d="M211 141 L205 128 L207 118" />
              <path d="M237 97 L232 86 L235 77" />
              <path d="M275 103 L270 91 L273 82" />
              <path d="M351 73 L362 67 L371 69" />
              <path d="M373 85 L382 76 L393 74" />
              <path d="M487 133 L496 122 L507 119" />
              <path d="M482 250 L494 242 L505 244" />
              <path d="M119 287 L107 285 L99 290" />
              <path d="M488 291 L500 291 L508 298" />
            </g>
          </g>

          {/* Ambient particles */}
          <g aria-hidden="true">
            {particles.map((particle) => (
              <circle
                key={particle.id}
                className="tree-particle"
                cx={particle.x}
                cy={particle.y}
                r={particle.size}
                style={
                  {
                    '--particle-delay': particle.delay,
                    '--particle-duration': particle.duration,
                  } as CSSProperties
                }
              />
            ))}
          </g>

          {/* Falling coins */}
          <g className="tree-coins" aria-hidden="true">
            {fallingCoins.map((coin) => {
              const fallSeconds = coin.duration
              const settleSeconds = 0.35
              const totalSeconds =
                fallSeconds +
                settleSeconds +
                COIN_WAIT_SECONDS +
                COIN_FADE_SECONDS

              const landingX = Math.max(
                75,
                Math.min(
                  525,
                  300 +
                    (coin.x - 300) * 0.55 +
                    coin.drift * 0.7 +
                    ((coin.id * 47) % 61) -
                    30,
                ),
              )

              const landingY = GROUND_Y - coin.size * 0.28
              const dx = landingX - coin.x
              const dy = landingY - coin.y
              const fallEnd = fallSeconds / totalSeconds
              const settleEnd = (fallSeconds + settleSeconds) / totalSeconds
              const waitEnd =
                (fallSeconds + settleSeconds + COIN_WAIT_SECONDS) / totalSeconds

              const keyTimes = [0, fallEnd, settleEnd, waitEnd, 1].join(';')

              return (
                <g
                  key={coin.id}
                  className="coin-drop-group"
                  transform={`translate(${coin.x} ${coin.y})`}
                >
                  <g className="coin-lifecycle">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={`0 0; ${dx * 0.94} ${dy * 0.94}; ${dx} ${dy}; ${dx} ${dy}; ${dx} ${dy}`}
                      keyTimes={keyTimes}
                      dur={`${totalSeconds}s`}
                      begin={`${coin.delay}s`}
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.25 0.1 0.25 1; 0.2 0.8 0.2 1; 0 0 1 1; 0 0 1 1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0; 1; 1; 1; 0"
                      keyTimes={`0; ${Math.min(0.04, fallEnd * 0.2)}; ${settleEnd}; ${waitEnd}; 1`}
                      dur={`${totalSeconds}s`}
                      begin={`${coin.delay}s`}
                      repeatCount="indefinite"
                    />
                    <ellipse
                      className="coin-edge"
                      cx="0"
                      cy="0"
                      rx={coin.size * 0.52}
                      ry={coin.size * 0.43}
                    />
                    <circle className="coin-face" cx="0" cy="0" r={coin.size * 0.42} />
                    <circle className="coin-ring" cx="0" cy="0" r={coin.size * 0.29} />
                    <text
                      className="coin-symbol"
                      x="0"
                      y={coin.size * 0.16}
                      textAnchor="middle"
                      fontSize={coin.size * 0.55}
                    >
                      $
                    </text>
                  </g>
                </g>
              )
            })}
          </g>

          {/* Ground line */}
          <path
            d="M55 408 Q300 399 545 408"
            fill="none"
            stroke="#93c5fd"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}

export default MoneyTree
