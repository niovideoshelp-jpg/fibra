# Fibra — a internet sob os oceanos

Mini documentário em Remotion + GSAP, sincronizado à narração original de 104,6 segundos.

## Duas montagens

| Composição | Linguagem | Saída |
|---|---|---|
| FibraHorizontal | 13 planos, macro de materiais e infografia lateral | 1920 × 1080, 30 fps |
| FibraVertical | 12 planos nativos, narrativa pelo eixo vertical | 1080 × 1920, 30 fps |

O vertical é implementado em **PortraitFilm**, com cenas próprias em **src/v4/portrait**. Não é recorte ou redimensionamento da montagem horizontal. Os formatos compartilham materiais, desenhos básicos, paleta, áudio e dados cartográficos.

## Direção

Quatro imagens originais com transparência — cabo em corte, bloco geológico, ROV e junta de reparo — se combinam com seções vetoriais, máscaras animadas, pulsos, luzes e textura leve. Os poucos rótulos identificam partes ou regiões; não repetem a narração.

- [Direção v4](DIRECAO-V4.md)
- [Roteiro visual](STORYBOARD.md)
- [Recursos e transparência](ASSETS.md)
- [Validação](VALIDACAO.md)

## Editar e renderizar

```sh
npm install
npm run studio
npm run check
npm run render:horizontal
npm run render:vertical
```

As timelines SVG são sincronizadas por frame com @remotion/gsap. Câmeras e geometria dependentes do frame usam Remotion. O workflow de revisão gera 52 quadros e o workflow de exportação renderiza os MP4s no GitHub.

## Narração

O áudio original permanece fora deste repositório público. Por padrão, as composições renderizam apenas os visuais. A propriedade audioSrc aceita a origem autorizada do áudio; props.private.json e public/audio são privados e ignorados pelo Git.

## Arquivos e histórico

- src/v4/HorizontalFilm.tsx: montagem horizontal.
- src/v4/PortraitFilm.tsx: montagem vertical.
- src/v4/shared.tsx: imagens, materiais e elementos compartilhados.
- public/images/v4-*.png: ilustrações originais com alpha.
- archive/versao-3: montagem anterior preservada.

As imagens são ilustrativas e as rotas são esquemáticas; não são projetos de engenharia nem rotas reais identificadas. Contornos continentais: Natural Earth, domínio público.
