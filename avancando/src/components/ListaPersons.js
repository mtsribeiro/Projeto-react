const ListaPersons = ({nome, idade, profissao}) => {

    var carteira = ''
    if (idade >= 18){
        carteira = 'Autorizado'
    }
    else{
        carteira = 'Não autorizado'
    }

  return (
    <div>
        <h3>{nome}</h3>
        <ul>
            <li>{idade}</li>
            <li>{profissao}</li>
            <li>{carteira}</li>
        </ul>
    </div>
  )
}

export default ListaPersons