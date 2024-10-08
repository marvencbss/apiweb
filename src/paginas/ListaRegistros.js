import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios/configuracaoAxios';
import BotaoVoltar from '../componentes/BotaoVoltar';
import { Link } from 'react-router-dom';
import Modal from '../componentes/Modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';

function ListaRegistros() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [buscarPorNome, setBurcarPorNome] = useState('');

  useEffect(() => {
    axiosInstance.get('http://localhost:3001/api_super/usuarios')
      .then(response => {
        setRegistros(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Houve um problema ao buscar os registros.');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    axiosInstance.delete(`http://localhost:3001/api_super/usuarios/${selectedId}`)
      .then(response => {
        setRegistros(registros.filter(registro => registro.id !== selectedId));
        setMensagem('Registro deletado com sucesso!');
        setShowModal(false);
      })
      .catch(error => {
        setError('Houve um problema ao deletar o registro.');
        setShowModal(false);
      });

    setTimeout(() => {
      setMensagem('');
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const filteredRegistros = registros.filter(registro =>
    registro.nome.toLowerCase().includes(buscarPorNome.toLowerCase())
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="lista-registros">
      <h2>Lista de Registros</h2>
      <div>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={buscarPorNome}
        onChange={(e) => setBurcarPorNome(e.target.value)}
        style={{ width: '20%' }} />
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>UF</th>
            <th>Cep</th>
            <th>Complemento</th>
            <th>Bairro</th>
            <th>logradouro</th>
            <th>Número</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {filteredRegistros.map(registro => (
            <tr key={registro.id}>
              <td>{registro.nome}</td>
              <td>{registro.idade}</td>
              <td>{registro.cidade}</td>
              <td>{registro.uf}</td>
              <td>{registro.cep}</td>
              <td>{registro.complemento}</td>
              <td>{registro.bairro}</td>
              <td>{registro.logradouro}</td>
              <td>{registro.numero}</td>
              <td class="action-column">
                <Link to={`/editar/${registro.id}`} className="espaco_coluna">
                   <FaEdit/> Editar
                </Link>
                <Link onClick={() => handleDelete(registro.id)}>
                  <FaTrash /> Deletar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {mensagem && <p>{mensagem}</p>}
      <BotaoVoltar/>
      <Modal
        show={showModal}
        handleClose={closeModal}
        handleConfirm={confirmDelete}
        title="Confirmar Exclusão"
      >
        Tem certeza que deseja deletar este registro?
      </Modal>
    </div>
  );
}

export default ListaRegistros;