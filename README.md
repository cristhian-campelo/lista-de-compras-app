# 🛒 Lista de Compras

Aplicativo web instalável (PWA) para fazer a lista de compras do mercado e saber o **total exato** enquanto você compra. Funciona no celular e no PC, offline, sem cadastro e sem enviar nenhum dado para servidores.

**Acesse:** https://SEU-USUARIO.github.io/lista-de-compras/

## Funcionalidades

- **Total em tempo real:** total da lista, valor já no carrinho e quanto falta.
- **Item, quantidade e preço:** o preço é obrigatório; itens com valor R$ 0,00 ficam destacados em laranja com um alerta ⚠️.
- **Categorias coloridas:** Hortifruti, Padaria, Açougue, Laticínios, Frios e Ovos, Mercearia, Bebidas, Limpeza, Higiene, Congelados, Snacks e Doces, Pets e Outros. A categoria usada por último sobe para o topo da lista.
- **Sugestões de itens:** a seta ▾ ao lado do nome abre sugestões por categoria, com os itens mais comprados no topo.
- **Modo mercado:** toque no círculo para marcar o item como colocado no carrinho; os marcados vão para o fim da categoria.
- **Orçamento:** defina um limite e acompanhe quanto ainda pode gastar.
- **Exportar:** copiar a lista como texto, baixar **CSV** ou **planilha Excel (.xlsx)**.
- **Backup:** salve a lista em um arquivo `.json` e restaure quando quiser.
- **Tema claro e escuro** automáticos, desenhado primeiro para o celular.
- **Funciona offline** depois do primeiro acesso.

## Como usar

1. Digite o nome do item, ajuste a quantidade, informe o **preço unitário** (digite só os números: `450` vira `4,50`) e toque em **Adicionar**.
2. Toque no botão da categoria para escolher outra; a última escolhida é mantida para o próximo item.
3. No mercado, toque no círculo ao lado do item para marcá-lo.
4. Toque no item para editar ou excluir. Exclusões podem ser desfeitas na hora.
5. No menu **⋯**: defina o orçamento, exporte a lista, remova os itens marcados ou limpe a lista.

## Instalar como app

Abra o endereço acima e instale:

| Dispositivo | Como instalar |
| --- | --- |
| Android (Chrome) | Menu ⋮ → **Instalar app** (ou **Adicionar à tela inicial**) |
| iPhone (Safari) | Botão Compartilhar → **Adicionar à Tela de Início** |
| PC (Chrome ou Edge) | Ícone de instalar na barra de endereço |

## Seus dados

- A lista fica salva **apenas no navegador do seu aparelho** (`localStorage`). Cada pessoa tem a sua, e o desenvolvedor não tem acesso a ela.
- Limpar os dados do navegador ou desinstalar o app apaga a lista. Faça backup de vez em quando em **⋯ → Exportar lista → Salvar backup (.json)**.
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

O `index.html` é sempre buscado na internet quando há conexão, então as mudanças nele aparecem na próxima abertura. Se você mudar **outros arquivos** (fontes, ícones, biblioteca), troque a versão do cache em `sw.js` (`compras-v1` para `compras-v2`, e assim por diante).

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks. [SheetJS](https://sheetjs.com/) para exportar `.xlsx` e a fonte [Manrope](https://fonts.google.com/specimen/Manrope) (licença OFL).
