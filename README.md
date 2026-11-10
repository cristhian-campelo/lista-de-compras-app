# 🛒 Lista de Compras

Aplicativo web instalável (PWA) para fazer a lista de compras do mercado e saber o **total exato** enquanto você compra. Funciona no celular e no PC, offline, sem cadastro e sem enviar nenhum dado para servidores.

**Acesse:** https://cristhian-campelo.github.io/lista-de-compras-app/

## Funcionalidades

- **Navegação em 3 abas:** **🛒 Lista** (compras atuais), **📋 Histórico** (compras finalizadas e registradas com data) e **📊 Relatórios** (gráficos e análise de gastos).
- **Total em tempo real:** total da lista, valor já no carrinho, quanto falta e quantos itens já foram pegos (ex.: `7/12`).
- **Várias listas ativas:** Mercado, Farmácia, Churrasco… Toque no nome da lista no topo para trocar, criar, renomear ou excluir.
- **Registrar compra no histórico:** botão ao final da lista que salva uma cópia completa da compra com data no **Histórico**, desmarca automaticamente os itens do carrinho mantendo-os na lista atual e oferece atalho imediato para fazer backup.
- **Histórico de compras editável:** acesse qualquer compra passada para ver itens e totais, compartilhar/exportar (WhatsApp, texto, CSV, Excel), excluir ou **editar** (com confirmação antes de aplicar as alterações).
- **Relatórios e gráfico Valor × Data:** visualize e compare seus gastos ao longo do tempo com filtros por **período** (`30 dias`, `2 meses`, `3 meses`, `6 meses`, `1 ano`, `Tudo`) e por **categoria** (`Todas as categorias` ou uma categoria específica).
- **Item, quantidade e preço:** o preço é obrigatório; itens com valor R$ 0,00 ficam destacados em laranja com um alerta ⚠️.
- **Itens por peso (kg):** toque em **/un** no campo de preço para mudar para **/kg** e informe o peso (ex.: `750` vira `0,750 kg`).
- **Lembra o último preço:** ao digitar um item já comprado, o preço, a unidade e a categoria são preenchidos sozinhos. Na lista aparece ▲ ou ▼ quando o preço subiu ou caiu em relação à última compra.
- **Itens repetidos:** ao adicionar um item que já está na lista, o app pergunta se quer somar à quantidade existente.
- **Categorias coloridas com atalho `+`:** Hortifruti, Padaria, Açougue, Laticínios, Frios e Ovos, Mercearia, Bebidas, Limpeza, Higiene, Congelados, Snacks e Doces, Pets e Outros. Toque no `+` ao lado do nome da categoria na lista para já selecioná-la e abrir o teclado.
- **Sugestões de itens:** a seta ▾ ao lado do nome abre os itens comprados recentemente e sugestões por categoria.
- **Modo mercado:** toque no círculo para marcar o item como colocado no carrinho; os marcados vão para o fim da categoria e podem ser ocultados.
- **Excluir com desfazer:** pela lixeira 🗑️, deslizando o item para a esquerda ou pela tela de edição.
- **Orçamento:** defina um limite por lista e acompanhe quanto ainda pode gastar.
- **Compartilhar e exportar:** enviar pelo WhatsApp/Telegram, copiar como texto, baixar **CSV** ou **planilha Excel (.xlsx)**.
- **Backup completo:** salve todas as listas ativas, histórico de compras e memória de preços em um arquivo `.json` e restaure quando quiser.
- **Tema claro, escuro ou automático**, desenhado primeiro para o celular.
- **Instalação com um toque:** botão **Instalar** dentro do próprio app (no iPhone, mostra o passo a passo).
- **Funciona offline** e abre na hora, mesmo com sinal fraco dentro do mercado.

## Como usar

1. Digite o nome do item, ajuste a quantidade, informe o **preço unitário** (digite só os números: `450` vira `4,50`) e toque em **Adicionar**. Para itens vendidos por peso, toque em **/un** para mudar para **/kg**.
2. Toque no botão da categoria para escolher outra; a última escolhida é mantida para o próximo item.
3. No mercado, toque no círculo ao lado do item para marcá-lo.
4. Toque no item para editar. Para excluir, toque na lixeira 🗑️ ou deslize o item para a esquerda. Exclusões podem ser desfeitas na hora pelo botão **Desfazer**.
5. Toque no nome da lista (no topo, à esquerda) para trocar de lista ou criar outra.
6. No menu **⋯**: defina o orçamento, escolha o tema, compartilhe ou exporte a lista, oculte ou remova os itens marcados ou limpe a lista.

## Instalar como app

Abra o endereço acima e toque em **Instalar** (aviso no topo do app ou em **⋯ → Instalar app**). Se o navegador não mostrar a janela de instalação, siga o caminho manual:

| Dispositivo | Como instalar |
| --- | --- |
| Android (Chrome) | Menu ⋮ → **Instalar app** (ou **Adicionar à tela inicial**) |
| iPhone (Safari) | Botão Compartilhar → **Adicionar à Tela de Início** |
| PC (Chrome ou Edge) | Ícone de instalar na barra de endereço |

## Seus dados

- A lista fica salva **apenas no navegador do seu aparelho** (`localStorage`). Cada pessoa tem a sua, e o desenvolvedor não tem acesso a ela.
- Limpar os dados do navegador ou desinstalar o app apaga as listas. Faça backup de vez em quando em **⋯ → Exportar e compartilhar → Salvar backup**.
- Não há sincronização entre aparelhos. Para levar a lista de um aparelho a outro, use o backup.

## Rodar localmente

O app é estático, sem build. O service worker só funciona em `localhost` ou `https`, então use um servidor local em vez de abrir o arquivo direto:

```bash
python -m http.server 8000
```

Depois acesse http://localhost:8000. Também serve a extensão **Live Server** do VS Code.

## Publicar no GitHub Pages

1. Envie o projeto para um repositório público no GitHub.
2. Em **Settings → Pages**, em *Build and deployment*, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
3. Aguarde um ou dois minutos: o endereço `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` aparece na própria página.

## Estrutura do projeto

```
├── index.html            # app completo (HTML, CSS e JavaScript)
├── manifest.webmanifest  # nome, cores e ícones do app instalável
├── sw.js                 # service worker (funcionamento offline)
├── xlsx.full.min.js      # SheetJS, usado para gerar a planilha .xlsx
├── fonts/                # fonte Manrope (arquivos woff2)
└── icons/                # ícones do app
```

## Atualizar o app

Altere os arquivos, publique de novo e pronto:

```bash
git add .
git commit -m "Descreva a mudança"
git push
```

O app abre sempre pela cópia guardada no aparelho (para ser rápido no mercado) e baixa a versão nova do `index.html` em segundo plano. Por isso, depois de publicar, as mudanças aparecem a partir da **segunda** abertura do app. Se você mudar **outros arquivos** (fontes, ícones, biblioteca), troque a versão do cache em `sw.js` (`compras-v3` para `compras-v4`, e assim por diante).

> As listas salvas na versão antiga do app (uma lista só) são convertidas automaticamente para a lista **Mercado** na primeira abertura.

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks. [SheetJS](https://sheetjs.com/) para exportar `.xlsx` e a fonte [Manrope](https://fonts.google.com/specimen/Manrope) (licença OFL).
