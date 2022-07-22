import axios from "axios";

class RegisterService {
  async create (nome, email, telefone, mensagem) {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: { nome, email, telefone, mensagem }
    });
    return response;
  }

  async getAll() {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/user",
      data: {}
    });
    return response;
  }
}

export default RegisterService;
