class Clientes {

    private clientes: Array<Cliente>

    constructor() {
        this.clientes = new Array<Cliente>();

    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    buscarCliente(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    remover(cpf: string): void {
        const clienteARemover = this.buscarCliente(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listarClientes(): Array<Cliente> {
        return this.clientes;
    }
}