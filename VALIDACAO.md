# Validação da versão 4

Código revisado: f6701f63a07bf73b246726408fe9c5144bc773d3.

- TypeScript aprovado no GitHub.
- 52 quadros renderizados por rodada de revisão, abrangendo as duas montagens, estados de entrada, fechamento da junta, anatomia e passagens entre planos.
- Quatro imagens originais publicadas em public/images/v4-*.png, com canal alpha verificado.
- FibraVertical aponta para PortraitFilm, com 12 cenas próprias em src/v4/portrait. Não renderiza nem recorta HorizontalFilm.
- HorizontalFilm contém 13 planos, incluindo novas cenas de anatomia, terreno em corte e reparo.
- Símbolo de ruptura desaparece ao concluir o fechamento da junta; progressão de anatomia, ROV e reparo conferida em quadros sequenciais dos MP4s.
- Revistas margens da imagem do cabo, legibilidade dos nomes das regiões, composição vertical da seção e integração do ROV.
- MP4s H.264 em 1920 × 1080 e 1080 × 1920, 30 fps, 3138 frames, 104,600 segundos.
- Narração original incorporada localmente em AAC, com 104,568 segundos; não publicada no repositório.
- Versão 3 preservada em archive/versao-3 e em seus arquivos de entrega anteriores.

[Revisão de quadros](https://github.com/niovideoshelp-jpg/fibra/actions/runs/36075034734).
[Exportação dos dois filmes](https://github.com/niovideoshelp-jpg/fibra/actions/runs/36075034762).

Artefatos de revisão: 14 dias de retenção. Exportações visuais: 30 dias. Código e imagens permanecem no repositório.
