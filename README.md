# Resgate GV — estrutura do site

## Estrutura

- `index.html` — estrutura semântica da página
- `main.js` — menu mobile, animações, navegação ativa e lightbox da galeria
- `assets/style/style.css` — ponto de entrada do CSS
- `assets/style/variaveis.css` — cores, fontes, medidas e imagens
- `assets/style/configuracoes.css` — reset/configurações globais
- `assets/style/presets.css` — classes reutilizáveis
- `assets/style/header.css` — cabeçalho
- `assets/style/main.css` — hero, sobre, encontro, galeria e faça parte
- `assets/style/footer.css` — rodapé
- `assets/style/animacoes.css` — transições/efeitos
- `assets/style/responsivo.css` — versão mobile/tablet
- `assets/style/lightbox.css` — visualizador da galeria

## Imagens

Mantenha seus arquivos atuais nestes caminhos:

- `assets/imgs/LogoResgate.png`
- `assets/imgs/icone-proposito.png`
- `assets/imgs/icone-comunidade.png`
- `assets/imgs/icone-resgate.png`
- `assets/imgs/galeria/1 (1).jpg` até as imagens existentes da galeria

A primeira imagem da galeria é usada como fundo do hero e a quarta como fundo do bloco "Próximo encontro". Se você tiver imagens específicas para esses fundos, basta trocar as duas variáveis em `variaveis.css`.

## Observação

Os símbolos dos ícones de calendário, relógio, localização, Instagram e WhatsApp foram mantidos sem biblioteca externa para o site funcionar offline. Se quiser, eles podem ser substituídos depois por SVGs próprios mantendo o mesmo layout.
