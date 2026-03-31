# MINI LOJA VIRTUAL

## 🔗 Sobre
- Este projeto é uma loja virtual simples desenvolvida com PrimeReact e Axios, que exibe um formulário de cadastro, produtos em um card estilizado e permite adicionar novos produtos, integrando o consumo de uma API externa com a funcionalidade de gerenciamento de inventário em tempo real
  
  
## ✨ Funcionalidades
- Vitrine Interativa: Uma página inicial elegante onde o cliente pode explorar as obras. Cada item possui um efeito de sombra ao passar o mouse
- Detalhes do Produto: Ao clicar em "Ver Detalhes", um componente Dialog (modal) é disparado, exibindo a descrição técnica da obra e uma imagem ampliada sem recarregar a página
- Cadastro de Acervo: Uma seção exclusiva para adicionar novos itens. Ao preencher o formulário, a nova arte é injetada instantaneamente no topo da galeria através do gerenciamento de estado (useState)
  
  
## 🛠️ Tecnologias Utilizadas
- React JS
- PrimeReact
- PrimeFlex
- Axios
- JavaScript ES6+
- Node.js (v18.17.0)
  
  
## 📂 Estrutura do Projeto

Dentro da pasta do projeto, temos os seguintes arquivos:  
  
projeto-loja-react/  
│  
├── public/  
│   ├── index.html → Arquivo principal da página  
│   ├── manifest.json → Configuração do manifesto  
│   └── robots.txt → Configuração para web crawlers  
│  
├── src/  
│   ├── index.js → Ponto de entrada do React  
│   ├── index.css → Estilos globais da página  
│   ├── App.js → Componente principal da aplicação  
│   ├── App.css → Estilos do componente App  
│   ├── App.test.js → Testes da aplicação  
│   ├── reportWebVitals.js → Relatório de performance  
│   ├── setupTests.js → Configuração de testes  
│   ├── components/  
│   │   ├── ProductCard.js → Componente de cartão de produto  
│   │   ├── ProductForm.js → Componente de formulário de produto  
│   │   └── ProductList.js → Componente de listagem de produtos  
│   └── views/  
│       └── Storefront.js → Página principal da loja  
│  
├── package.json → Configuração do projeto e dependências  
├── package-lock.json → Arquivo gerado automaticamente pelo npm  
└── README.md → Explicação do projeto  
  
  
## 📦 Instalação
- Clone o repositório (se aplicável):
```bash
git clone https://github.com/andregtech/projeto-loja-react
```
- Instale as dependências:
```bash
npm install
```
- Entre na pasta do projeto:
```bash
cd projeto-loja-react
```
  
  
## ▶️ Execução
- Inicie a aplicação, execute o seguinte comando no terminal  
(o terminal utilizado no projeto foi o Bash no VScode):
```bash
npm run start
```
A página no navegador abre no localhost: http://localhost:3000/
  
  
## 👨‍💻 Identificação
- Desenvolvido por **André Willamy Dos Santos Moraes** - Aluno Full Stack - Geração Tech 3.0
  
  
## ⚖️ Licença
- Este projeto foi desenvolvido em março de 2026, exclusivamente para fins educacionais como parte dos requisitos obrigatórios da **Geração Tech 3.0**
- A permissão de uso e avaliação é restrita à equipe docente e de monitoria, sob orientação de **Nazaré Almeida**, visando a validação de competências em Back-end para a obtenção do título no curso **Full Stack**