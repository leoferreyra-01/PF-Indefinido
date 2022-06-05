import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import s from './SearchBar.module.css';

export default function SearchBar({ placeholder, handleDni, handleName }) {
  const [searched, setSearched] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const handleOnChange = e => {
    console.log(e.target.value);
    setSearched(e.target.value);
    // if (
    //   /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(e.target.value) ||
    //   (/^[a-zA-Z]*$/.test(e.target.value) && /^[0-9]*$/.test(e.target.value))
    // ) {
    //   setErrors('Formato de busqueda incorrecto, intente de nuevo');
    //   alert('Formato de busqueda incorrecto, intente de nuevo');
    // }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searched && !errors) {
      return /^[0-9]*$/.test(searched)
        ? dispatch(handleDni(searched))
        : dispatch(handleName(searched));
    } else {
      alert(
        'El campo de busqueda esta vacio, por favor ingrese el dni del paciente a buscar'
      );
    }
    setSearched('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.search_container}>
      <div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="2x"
          className={s.fa_icon}
        />
        <input
          type="text"
          placeholder={placeholder}
          value={searched}
          onChange={handleOnChange}
          className={s.input}
        />
      </div>
      <input
        type="submit"
        value="Buscar"
        className={s.boton}
        disabled={!!errors}
      />
    </form>
  );
}
