interface ILivro{
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    exibirDados(): void;
   atualizarEstoque(livroquant: number);
   }
  
  class Livro implements ILivro {
      titulo: string;
      ano: number;
      isbn: string;
      preco: number;
      autor: string;
      editora: string;
      estoque: number;
       constructor(titulo: string, ano:number, isbn: string, preco: number, autor: string, autora: string,estoque: number ){
         this.titulo;
         this.ano;
         this.isbn;
         this.preco;
         this.autor;
         this.editora;
         this.estoque;
    
      }
      
      atualizarEstoque(livroquant: number): void {
        this.editora += livroquant;
      }
       exibirDados(): void {
          console.log(`Titulo do livro`);
          console.log(`Ano de edição:${this.ano}`);
          console.log(`ISBN:${this.isbn}`);
          console.log(`Preço: ${this.preco}`);
          console.log(`Autor do livro: ${this.autor}`);
          console.log(`Editora:${this.editora}`);
          console.log(`Estoque: ${this.estoque}`);
     
      }
   }
   class Ebooks implements Livro{
      titulo: string;
      ano: number;
      isbn: string;
      preco: number;
      autor: string;
      editora: string;
      estoque: number;
      tamanhoArquivo: any;
  
      constructor(titulo: string, ano:number, isbn: string, preco: number, autor: string, autora: string,estoque: number, tamanhoArquivo: any ){
          this.titulo= titulo;
          this.ano= ano;
          this.isbn= isbn;
          this.preco= preco;
          this.autor= autor;
          this.editora= this.editora;
          this.estoque= estoque;
          this.tamanhoArquivo= this.tamanhoArquivo;
      
       }       
   
      exibirDados(): void{
        console.log(`Titulo do livro ${this.titulo}`);
        console.log(`Ano de edição:${this.ano}`);
        console.log(`ISBN:${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor do livro: ${this.autor}`);
        console.log(`Editora:${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`tamanho do arquivo: ${this.tamanhoArquivo}`);
 
 
      }
 
 
      atualizarEstoque(livroquant: number): void {
        this.editora += livroquant;

       
    }
      





      }
 
   