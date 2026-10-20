
import './GoldCoin.css'

function GoldCoin() {
  return (
    <div className="coin-fall">
      <div className="gold-coin">
        <div className="gold-coin__edge" />

        <div className="gold-coin__face gold-coin__front">
          <span>$</span>
        </div>

        <div className="gold-coin__face gold-coin__back">
          <span>$</span>
        </div>
      </div>
    </div>
  )
}

export default GoldCoin
