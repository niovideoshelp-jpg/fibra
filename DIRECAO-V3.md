# Direção v3 — cartografia e matéria

Nova paleta: papel quente, carvão, oliva, cobre e verde pálido. Nenhum fundo azul. Textura vetorial discreta, gradiente de luz, materiais menos saturados.

Correções:
- Satélite redesenhado com antena na origem local; percurso óptico termina exatamente na antena. Movimento da câmera afeta planeta, linhas e satélite juntos.
- Posição do sinal calculada sobre a mesma curva quadrática da conexão, evitando trajetórias soltas.
- Cabo do navio deriva da mesma posição e escala da popa em cada frame. Oscilação do navio e origem do cabo compartilham coordenadas.
- Estação costeira marca a saída do cabo.
- Mapas centralizados, com escala própria no vertical.
- Câmara sem giros arbitrários, com aproximações menores e curvas de aceleração suaves.
- Sobreposição de 18 frames nos cortes, preservando os tempos da narração. Dissoluções e revelações verticais seguem a passagem entre espaço, superfície e oceano.
- Abertura e encerramento com celular centralizado; reparo e ruptura aproximados do centro útil do quadro.

Remotion permanece responsável pela composição e renderização. Animações SVG usam GSAP; geometria de conexão dependente do frame usa as mesmas coordenadas dos objetos.

Revisão final: o mapa usa transformação de câmera explícita por frame para preservar o centro e as margens. O formato vertical contém um detalhe do Atlântico conectado ao mapa geral. Feixes convergem dentro do núcleo da fibra; a nuvem se dissolve para revelar a rede, sem linhas soltas. As revelações verticais têm borda suave.
