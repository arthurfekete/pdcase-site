import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollTo(sessionId: string): void {
    const element = document.getElementById(sessionId);
    if (element) {
      // Usa scrollIntoView com alinhamento para garantir a visibilidade completa
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (sessionId === 'sessao2') {
        // Aguarda a rolagem terminar antes de ajustar -1px adicionais
        setTimeout(() => {
          const rect = element.getBoundingClientRect(); // Captura a posição exata do elemento em relação à janela
          const offset = 1; // Ajuste desejado
          window.scrollTo({
            top: window.scrollY + rect.top + offset,
            behavior: 'smooth',
          });
        }, 500); // Tempo suficiente para o scrollIntoView
      }
    }
  }
}
