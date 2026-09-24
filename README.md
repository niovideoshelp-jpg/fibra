# Fibra — a internet sob os oceanos

Documentário visual de 104,6 segundos, criado em **Remotion + GSAP**, com imagens em PNG transparente, ícones vetoriais e 11 cenas sincronizadas à narração de referência.

## Composições

| Composição | Formato | Resolução | Frames |
|---|---|---|---|
| FibraHorizontal | 16:9 | 1920 × 1080 | 3138 a 30 fps |
| FibraVertical | 9:16 | 1080 × 1920 | 3138 a 30 fps |

As cenas têm layouts próprios por formato. A integração `@remotion/gsap` controla as timelines por frame; não há animações dependentes do relógio do navegador.

## Abrir no ambiente de edição

```sh
npm install
npm run studio
```

## Narração

O MP3 original fica fora do repositório público. Por padrão, a composição abre como **prévia visual sem áudio**. A propriedade `audioSrc` aceita uma URL acessível no ambiente de renderização ou um arquivo disponibilizado em `public/audio/` (pasta ignorada pelo Git).

Para usar o áudio em um ambiente autorizado, crie um arquivo privado `props.private.json` com a propriedade `audioSrc` apontando para a origem do áudio. Não adicione URLs privadas com credenciais ao repositório.

```sh
npm run render:horizontal -- --props=props.private.json
npm run render:vertical -- --props=props.private.json
```

## Verificação

`npm run check` verifica o TypeScript. O workflow de verificação tem apenas leitura do repositório e gera 22 quadros de revisão, um de cada cena em cada formato. Não publica áudio, não faz commits e não renderiza um vídeo final.

## Recursos

- `public/images/`: cabo, navio e satélite, gerados com ImageGen e canal alpha.
- `src/components/Icon.tsx`: ícones originais sem fundo.
- `src/scenes/`: 11 cenas com GSAP.
- `STORYBOARD.md`: descrição da sequência visual.
- `DIRECAO.md`: escolhas de produção.

Ilustrações do cabo e do navio são representações visuais. As conexões são esquemáticas, sem escala ou coordenadas de rotas reais.
