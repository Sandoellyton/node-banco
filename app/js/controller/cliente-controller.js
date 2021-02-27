class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputContaC =
            document.querySelector("#contaC");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaCliente = new Cliente(this.inputNome.value, this.inputCpf.value, parseInt(this.inputContaC.value));
        this.clientes.inserir(novaCliente);
        this.inserirClienteNoHTML(novaCliente);
    }
    listar() {
        this.clientes.listarClientes().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
