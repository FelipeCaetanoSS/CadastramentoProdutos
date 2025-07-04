class Produto {
    constructor() {
      this.id = 1;
      this.ArrayObj = [];
      this.id_atualizar = null;
    }
  
    salvar() {
      let produto = this.lerDados();
  
      if (this.camposValidos(produto) == true) {
        if (this.id_atualizar == null) {
          this.adicionar(produto);
        } else {
          this.atualizar(this.id_atualizar, produto);
        }
      }
      this.insertCamp();
      this.cancelar();
  
      console.log(this.ArrayObj);
    }
  
    lerDados() {
      let objProduto = {};
      objProduto.id = this.id;
      objProduto.nome = document.getElementById("nomeprod").value;
      objProduto.valor = document.getElementById("valorprod").value;
      return objProduto;
    }
    adicionar(produtoAdd) {
      this.ArrayObj.push(produtoAdd);
      this.id++;
    }
    camposValidos(objProduto) {
      let msn = "";
      if (objProduto.nome == "") {
        msn += "-Digite o nome do produto\n";
      }
      if (objProduto.valor == "") {
        msn += "-Digite o valor do produto\n";
      }
      if (msn != "") {
        alert(msn);
        return false;
      }
      return true;
    }
  
    cancelar() {
      document.getElementById("nomeprod").value = "";
      document.getElementById("valorprod").value = "";
      this.id_atualizar = null;
      document.getElementById("btn").innerText = "SALVAR";
    }
    insertCamp() {
      let tbody = document.getElementById("tbody");
      tbody.innerText = "";
      for (let i = 0; i < this.ArrayObj.length; i++) {
        let tr = tbody.insertRow();
  
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acao = tr.insertCell();
  
        td_id.innerText = this.ArrayObj[i].id;
        td_nome.innerText = this.ArrayObj[i].nome;
        td_valor.innerText = this.ArrayObj[i].valor;
  
        let imgExcluir = document.createElement("img");
        imgExcluir.src = "excluir.png";
        imgExcluir.setAttribute(
          "onclick",
          "produto.excluir(" + this.ArrayObj[i].id + ")"
        );
        let imgEditar = document.createElement("img");
        imgEditar.src = "editar.png";
        imgEditar.setAttribute(
          "onclick",
          "produto.editar(" + JSON.stringify(this.ArrayObj[i]) + ")"
        );
  
        td_acao.appendChild(imgExcluir);
        td_acao.appendChild(imgEditar);
      }
    }
    excluir(id) {
      if (confirm("DESEJA REALMENTE EXCLUIR O PRODUTO?")) {
        let tbody = document.getElementById("tbody");
        for (let i = 0; i < this.ArrayObj.length; i++) {
          if (this.ArrayObj[i].id == id) {
            this.ArrayObj.splice(i, 1);
            console.log(this.ArrayObj);
            tbody.deleteRow(i);
          }
        }
      }
    }
    editar(dados) {
      this.id_atualizar = dados.id;
      document.getElementById("nomeprod").value = dados.nome;
      document.getElementById("valorprod").value = dados.valor;
      document.getElementById("btn").innerText = "ATUALIZAR";
    }
    atualizar(id, objProduto) {
      for (let i = 0; i < this.ArrayObj.length; i++) {
        if (this.ArrayObj[i].id == id) {
          this.ArrayObj[i].nome = objProduto.nome;
          this.ArrayObj[i].valor = objProduto.valor;
        }
      }
    }
  }
  let produto = new Produto();
  