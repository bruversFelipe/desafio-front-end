import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import Icon from '../Icon';
import CardWrapper from "./style";
import PokemonsContext from "../../Pages/MeusPokemons/PokemonsContext";

const CardPokemon = ({
  excluiPokemon,
  capturarPokemon,
  pokemonAtual,
  expanded,
  children,
  ...props
}) => {
  const [expand, setExpand] = useState(false);
  const [confirma, setConfirma] = useState(false);
  const [pokeAtual, setPokeAtual] = useState(0);
  const context = useContext(PokemonsContext);

  useEffect(() => {
    const { pokemons } = context;
    if (pokeAtual === pokemonAtual) {
      pokemons.filter(item => item.id === pokemonAtual && setConfirma(true));
    } else {
      setPokeAtual(pokemonAtual);
      setConfirma(false);
    }
  })

  const openCloseCard = () => {
    setExpand(!expand);
  };

  const capturar = () => {
    setConfirma(true);
    if (capturarPokemon) {
      capturarPokemon();
    };
  }

  const deletePokemon = () => {
    setConfirma(false);
    setPokeAtual(0);
    if (excluiPokemon) {
      excluiPokemon();
    };
  }


  return (
    <CardWrapper
      {...props}
      expand={expand}
    >
      <div className="view-detalhes">
        {expanded ? (
          <React.Fragment>
            {!expand ? (
              <React.Fragment>
                {confirma && <Button icon="fas fa-trash-alt" onClick={deletePokemon}>Soltar</Button>}
                <React.Fragment>
                  {confirma ? <Icon className="check-confirm" size="18px" type="fas fa-check" /> :
                    <Button icon="fas fa-save" onClick={capturar}>Capturar</Button>}
                </React.Fragment>
                <Button icon="fas fa-info-circle" onClick={openCloseCard}>Detalhes</Button>
              </React.Fragment>
            ) : (
                <Icon type="fas fa-times" onClick={openCloseCard} />
              )}
          </React.Fragment>
        ) : null}
      </div>
      {children({ expand })}
    </CardWrapper>
  );
};

CardPokemon.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.func.isRequired,
  excluiPokemon: PropTypes.func,
  capturarPokemon: PropTypes.func,
  pokemonAtual: PropTypes.number,
};

CardPokemon.defaultProps = {
  expanded: false,
  excluiPokemon: null,
  capturarPokemon: null,
  pokemonAtual: 0,
};

export default CardPokemon;
