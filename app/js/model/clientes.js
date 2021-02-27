class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    buscarCliente(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    remover(cpf) {
        const clienteARemover = this.buscarCliente(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listarClientes() {
        return this.clientes;
    }
}
