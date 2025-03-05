import { connect } from "mongoose";

const databaseConnect = () => {
    console.log('Estamos a conectar ao banco, aguarde...');
    connect(process.env.MONGODB_URI)
        .then(() => console.log('Banco de dados conectado'))
        .catch((error) => console.error(`Erro: ${error}`));
}

export default databaseConnect;