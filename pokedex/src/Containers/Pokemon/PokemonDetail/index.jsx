import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMove, clearMove } from '../../../Redux/Redux';
import PropTypes from 'prop-types';
import Progress from '../../../Components/Progress'
import PokemonDetailWrapper from './style';
import Move from './Move';
import ProfileFlip from '../../../Components/ProfileFlip';


const PokemonDetail = ({ pokemon, getMove, move, clearMove }) => {
    const [visibleMove, setVisibleMove] = useState(false);

    useEffect(() => {
        if (Object.keys(move).length > 0) {
            setVisibleMove(true);
        }
    });

    const selectMove = (moveAtual) => {
        getMove(moveAtual.name);
    }

    const voltarMoves = () => {
        setVisibleMove(false);
        clearMove();
        // setItemMove(null);
    }
    return (
        <PokemonDetailWrapper>
            <div className="profile-content">
                <div className="profile">
                    <div className="img">
                        <ProfileFlip
                            front={<img src={pokemon.sprites.front_default} />}
                            back={<img src={pokemon.sprites.back_default} />}
                            details
                        />
                    </div>
                </div>
                <div className="title"><h1>{pokemon.name}</h1></div>
            </div>
            <div className="content">
                <div className="skills">
                    <div className="individual">
                        <h3>Height</h3>
                        <Progress percent={pokemon.height} />
                    </div>
                    <div className="individual">
                        <h3>Weight</h3>
                        <Progress percent={pokemon.weight} />
                    </div>
                    {pokemon.stats.map(item => (
                        <div className="individual">
                            <h3>{item.stat.name}</h3>
                            <Progress percent={item.base_stat} />
                        </div>
                    ))}
                </div>
                <div className="content-moves">
                    <h2>Moves</h2>
                    {visibleMove ?
                        <Move move={move} voltar={voltarMoves} />
                        :
                        <div className="moves">
                            {pokemon.moves.map(item => (
                                <div className="move-item" onClick={() => selectMove(item.move)}>{item.move.name}</div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </PokemonDetailWrapper>
    );
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        move: state.moveItem
    }
}

export default connect(mapStateToProps, { getMove, clearMove })(PokemonDetail);