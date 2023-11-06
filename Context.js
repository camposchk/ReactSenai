import { createContext, useState } from "react";

export const UtilsContexto = createContext();

export const UtilsProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [ultimoId, setUltimoId] = useState(0);

  // Função para adicionar um novo usuário
  const adicionarUsuario = (novoUsuario) => {
    setUltimoId(ultimoId + 1);
    setUsuarios([...usuarios, { ...novoUsuario, id: ultimoId + 1 }]);
  };

  // Função para deletar um usuário pelo ID
  const deletarUsuario = (userId) => {
    setUsuarios(usuarios.filter(user => user.id !== userId));
  };

  const contextValue = {
    usuarios,
    adicionarUsuario,
    deletarUsuario
  };

  return (
    <UtilsContexto.Provider value={contextValue}>
      {children}
    </UtilsContexto.Provider>
  );
};
