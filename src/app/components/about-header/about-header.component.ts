import { Component, HostListener, Renderer2 } from '@angular/core'; 

// Importa os módulos necessários:
// - Component: para definir o componente Angular.
// - HostListener: para escutar eventos da janela, como o scroll.
// - Renderer2: para manipular o DOM de forma segura no Angular.

@Component({
  selector: 'app-about-header', // Define o seletor HTML para o componente.
  standalone: true,            // Indica que este componente é independente e não precisa de um módulo pai.
  imports: [],                 // Lista de módulos que podem ser importados neste componente (vazio aqui).
  templateUrl: './about-header.component.html', // Caminho para o arquivo HTML do template deste componente.
  styleUrl: './about-header.component.css'      // Caminho para o arquivo de estilos CSS deste componente.
})
export class AboutHeaderComponent {

  // O construtor injeta o Renderer2, uma ferramenta para manipular o DOM de forma segura e compatível com Angular.
  constructor(private renderer: Renderer2) {}

  // O decorator @HostListener escuta eventos no elemento host ou na janela. Aqui, escutamos o evento de scroll na janela.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Obtém a posição atual do scroll vertical da janela.
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Captura elementos DOM necessários para aplicar alterações visuais.
    const logo = document.getElementById('logo') as HTMLImageElement; // Obtém o elemento com ID 'logo' e o trata como <img>.
    const header = document.getElementById('header'); // Obtém o elemento com ID 'header'.
    const links = document.getElementsByClassName('links') as HTMLCollectionOf<HTMLElement>; // Obtém elementos da classe 'links'.
    const nav = this.renderer.selectRootElement('#nav', true); // Seleciona o elemento <nav> usando o Renderer2.

    // Verifica se o elemento 'header' existe antes de continuar (evita erros).
    if (header) {
      // Aplica estilos diferentes dependendo da posição do scroll.
      if(scrollTop > 30) {
        // Quando o usuário rolar para baixo mais de 30px:
        for (let i = 0; i < links.length; i++) {
          links[i].style.marginTop = '-10px'; // Reduz o espaçamento superior dos links.
        }
        header.style.backgroundColor = '#161D26'; // Define a cor de fundo do header.
        header.style.height = '96px'; // Ajusta a altura do header.
        nav.style.height = '96px'; // Ajusta a altura do elemento <nav>.
        logo.src = '/logo-deitada.svg'; // Altera a imagem do logo para uma versão diferente.
        logo.style.width = '154px'; // Ajusta a largura do logo.
        logo.style.height = '48px'; // Ajusta a altura do logo.
      } else {
        // Quando o scroll voltar a menos de 30px (posição inicial):
        for (let i = 0; i < links.length; i++) {
          links[i].style.marginTop = '-30px'; // Restaura o espaçamento superior dos links.
        }
        header.style.backgroundColor = 'transparent'; // Remove a cor de fundo do header.
        logo.src = 'logo.svg'; // Restaura o logo original.
        logo.style.width = '72px'; // Restaura a largura original do logo.
        logo.style.height = '72px'; // Restaura a altura original do logo.
        header.style.height = '120px'; // Restaura a altura do header.
        nav.style.height = '120px'; // Restaura a altura do elemento <nav>.
      }
    }
  }
}
