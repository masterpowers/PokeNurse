import React from 'react'
import QuickMove from './QuickMove'
import CinematicMove from './CinematicMove'

// TODO find and use some JSON data
// Examples
// https://gist.github.com/shri/9754992
// https://gist.github.com/ihciah/71b0bf44322431bd34dea4ff193267e5

// TODO JSON list of evolutions
// Evolutions
// <div id='pokemon_evolve_info'>
// <div className='pokemon-evolve-info-title'>Evolutions</div>
// <a href='/pokemon/ivysaur' className='pokemon-evolve-info-item'>
// <div className='pokemon-sprite ivysaur'></div>
// <div className='pokemon-evolve-info-item-title'>ivysaur</div>
// </a>
// </div>
// </div>

const ModalBody = React.createClass({
  render () {
    let {
      transform,
      nickname,
      name,
      hp,
      cp,
      id,
      maxCP,
      type,
      weight,
      height,
      attack,
      defense,
      cpPerUpgrade,
      candies,
      spriteImageName,
      fast_move,
      charged_move,
      possibleQuickMoves,
      possibleCinematicMoves
    } = this.props
    
    let quickMoves = []
    for(var i=0; i<possibleQuickMoves.length; i++){
        quickMoves.push(<QuickMove key={i} move={possibleQuickMoves[i]} myMove={fast_move} />)
    }
    
    let cinematicMoves = []
    for(var i=0; i<possibleCinematicMoves.length; i++){
        cinematicMoves.push(<CinematicMove key={i} move={possibleCinematicMoves[i]} myMove={charged_move} />)
    }
    
    return (<div className='modal-body'>
      <div id='pokemon_sprite_wrapper'>
        <div className='modal-outline-white pokemon-cp'>
          <span>CP</span>
          <span style={{fontSize: '25px'}}>{cp}</span>
          <span>{` (Max ${maxCP})`}</span>
        </div>
        <div id='pokemon_sprite_sphere_wrapper'>
          <div id='pokemon_sprite_sphere'></div>
          <div id='pokemon_sprite_sphere_dot' style={{WebkitTransform: transform}}></div>
        </div>

        <img
          onClick={this._handleCry}
          title='Listen to Cry'
          alt='Profile Sprite'
          id='pokemon_profile_sprite'
          src={`http://www.pogo-dex.com/images/sprites/${spriteImageName}.png`}
        />
        <audio
          id='pokemonCry'
          ref='cry'
        >
          <source
            src={`./cries/${id}.ogg`}
            type='audio/ogg'
          />
        </audio>
      </div>

      <div id='pokemon_contents'>
        <div id='pokemon_name'>{`${nickname}`}</div>
        <div id='pokemon_health_bar'></div>
        <div id='pokemon_health'>{`HP ${hp}`}</div>
        <div className='pokemon_info'>
          <div className='pokemon-info-item split-3-way'>
            <div className='pokemon-info-item-text'>{`${type.join(' / ')}`}</div>
            <div className='pokemon-info-item-title'>Type</div>
          </div>
          <div className='pokemon-info-item split-3-way'>
            <div className='pokemon-info-item-text'>
              {`${weight} `}
              <span className='pokemon-stat-unit'>kg</span>
            </div>
            <div className='pokemon-info-item-title'>Weight</div>
          </div>
          <div className='pokemon-info-item split-3-way'>
            <div className='pokemon-info-item-text'>
              {`${height} `}
              <span className='pokemon-stat-unit'>m</span>
            </div>
            <div className='pokemon-info-item-title'>Height</div>
          </div>
        </div>
        <div className='pokemon_info'>
          <div className='pokemon-info-item split-2-way'>
            <div className='pokemon-info-item-text combat-stat'>{`${attack}`}</div>
            <div className='pokemon-info-item-title'>Attack</div>
          </div>
          <div className='pokemon-info-item split-2-way'>
            <div className='pokemon-info-item-text combat-stat'>{`${defense}`}</div>
            <div className='pokemon-info-item-title'>Defense</div>
          </div>
        </div>
        <div className='pokemon_info'>
          <div className='pokemon-info-item split-2-way'>
            <div className='pokemon-info-item-text cp-upgrade'>{cpPerUpgrade}</div>
            <div className='pokemon-info-item-title'>CP Per Upgrade</div>
          </div>
          <div className='pokemon-info-item split-2-way'>
            <div className='pokemon-info-item-text candy-count'>{candies}</div>
            <div className='pokemon-info-item-title'>{`${name} Candies`}</div>
          </div>
        </div>
        <div className='pokemon_move_info'>
          <div className='pokemon-move-item-title'>Quick Moves</div>
          {quickMoves}
          <div className='pokemon-move-item-title'>Charged Moves</div>
          {cinematicMoves}
        </div>
      </div>
    </div>)
  },
  _handleCry () {
    this.refs.cry.play()
  }
})

export default ModalBody
