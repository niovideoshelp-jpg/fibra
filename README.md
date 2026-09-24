# Fibra — a internet sob os oceanos

Motion graphic de 104,6 segundos, criado em **Remotion + GSAP**, com imagens em PNG transparente, ícones vetoriais e 13 planos sincronizados à narração de referência.

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

`npm run check` verifica o TypeScript. O workflow de verificação tem apenas leitura do repositório e gera 44 quadros de revisão, cobrindo os 13 planos e estados adicionais de movimento nos dois formatos. Não publica áudio, não faz commits e não renderiza um vídeo final.

## Recursos

- `public/images/`: cabo, navio e satélite, gerados com ImageGen e canal alpha.
- `src/v2/kit.tsx`: desenhos vetoriais originais sem fundo.
- `src/v2/scenes/`: 13 planos com GSAP.
- `STORYBOARD.md`: descrição da sequência visual.
- `DIRECAO-V3.md`: direção documental, paleta sem azul, geometria das conexões e continuidade entre planos.
- `archive/versao-1`: preserva a primeira montagem.

Ilustrações do cabo e do navio são representações visuais. As conexões são esquemáticas, sem escala ou coordenadas de rotas reais.

A versão atual usa satélite vetorial com antena e rotas no mesmo sistema de coordenadas. O arquivo PNG anterior é preservado como recurso. A exportação integral dos visuais ocorre no workflow `Exportar videos Remotion v3`.
