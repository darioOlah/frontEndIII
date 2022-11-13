function Form(props) {

  function handleSubmit(event) {

    event.preventDefault();

    if (props.nameUser.length <= 2) {
      alert('Insira um nome com 3 ou mais caracteres!');
      return;
    }

    if (props.nameUser[0] === ' ') {
      alert('Não é permitido espaço no primeiro caractere do nome!');
      return;
    }

    if (props.colorUser[0] !== "#") {
      alert('O código da cor hexadecimal deve sempre iniciar com o caractere: #');
      return;
    }

    if (props.colorUser.length <= 5) {
      alert('Insira uma cor hexadecimal válida!');
      return;
    }

    if (!isNaN(props.nameUser)) {
      alert('O campo nome deve conter apenas letras!');
      return;
    }

    props.setCards([...props.cards, {
      nameUser: props.nameUser,
      colorUser: props.colorUser,
    }]);

    props.setNameUser ("");
    props.setColorUser ("");

  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="container_input">
        <label>NOME:</label>
        <input
          placeholder="Insira seu nome completo"
          value={props.nameUser}
          onChange={(event) =>
            props.setNameUser(event.target.value)
          }
        />

        <label>COR:</label>
        <input
          placeholder="Insira sua cor favorita em formato hexadecimal (Ex: #00FF00)"
          value={props.colorUser}
          onChange={(event) =>
            props.setColorUser(event.target.value.trim())
          }
        />
      </div>

      <input className="button"
        type="submit"
        value="Salvar"
        disabled={props.name === '' || props.colorUser === '' ? true : false}
      />
    </form>
  );
}

export default Form;
