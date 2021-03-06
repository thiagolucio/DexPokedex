# DexPokedex (em desenvolvimento)

Projeto criado baseado em desafio fornecido pela empresa "Dextra is Muted"

<div align="center">
    <img src="https://www.dextra.com.br/wp-content/uploads/2020/08/Logos_Dextra-1.png" alt="Dextra Logo" />
</div>
<div align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffount.in%2Fwp-content%2Fuploads%2F2016%2F10%2Fpokemon-go-apk.png&f=1&nofb=1" alt="pokemon logo"/>
  </div>

### Tecnologias:

> Por ser um desafio, resolvi utilizar algumas soluções/ libraries que não tinha usado até momento. São elas: 

<div align="center">
<img src="https://vitejs.dev/logo.svg" alt="vitejs logo" width="160px"/>
</div>

## ViteJS

[Vite](https://vitejs.dev/) : Um novo Bundle Management que tenho ouvido falar ser muito mais performático que o Webpack, Rollup e Parcel e é claro o React Create Component. Isso porque ele basicamente pré-agrupa dependências usando esbuild(escrito em Go) e pré-empacota dependências de 10-100 vezes mais rápida que os outros empacotadores citados.

Outra grande vantagem do Vite é que ele trabalha com código sobre demanda, entregando somente aquele trecho de código que está sendo requisitado, sendo só processado aquele código que será usado ao invés de recarregar todo o content.

Ao invés de ficar me extendendo em explicações, é mais fácil ver ou direto no Site do Vite suas vantagens (https://vitejs.dev/guide/why.html#the-problems) ou então simplesmente dar uma olhada nesse vídeo curto aqui que encontrei no Youtube que vai te fazer entender porque ele é muito bom.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LQQ3CR2JTX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/LQQ3CR2JTX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/LQQ3CR2JTX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Vite 2.0 Crash Course | Super Fast Build Tool for JavaScript, React, Vue, Svelte, &amp; Lit (2021) - YouTube](https://www.youtube.com/watch?v=LQQ3CR2JTX8&t=457s)

## Chakra

[Biblioteca Chakra](https://chakra-ui.com/)  : Biblioteca visual semântica criada dedicada ao React e que já recebeu o reconhecimento por muita gente da comunidade. Ela se destaca por usar uma linguagem semântica e intuitiva, possuír um design clean e moderno e permitir a permeabilidade de componentes e ser bastante produtiva. Vale inclusive também dar uma olhada e conhecer melhor ela. Já tem 18.6K no Github. Eu nunca tinha usado e me senti à vontade com ela criando o layout do segundo componente. 

## Sobre:

> Como informado as pessoas da Dextra meu tempo livre é muito pouco e devido à isso somado a outros processos em que estou participando igualmente com desafios eu infelizmente não tive de verdade muito tempo para trabalhar nesse teste. Então procurei simplificar ao máximo para atender as descrições da tarefa e ao mesmo tempo poderem analisar. Se algo ficou de fora já peço desculpas por isso :(

- Clonar o projeto

- `yarn`  dentro da pasta do projeto para instalar as dependências.

- `yarn dev` para rodar o projeto em sua máquina. 

---

## Desafio:  [challenges/POKEDEX.md at master · dextra/challenges · GitHub](https://github.com/dextra/challenges/blob/master/frontend/POKEDEX.md)

### Realizado até : 16/06/2021:

- Animações, artes e imagens finalizadas.

- Layout e Design das páginas.

- Responsividade das páginas criadas.

- Página de listagem de Pokemons.

- Página de Detalhes do Pokemon escolhido.

- Página de Login (Bônus e não finalizada ainda a lógica)

- Squeleton(loading) 

- Filtro por nome do Pokemon

> Para visualizar o loading dos cards da listagem funcionando apague provisóriamente o "!" na página "Card.jsx", linha 25 no trecho `{!Img ?`
> 
> desta forma o squeleton lazing aparecerá para imagem. 
> 
> Logo abaixo na linha, 41, você poderá fazer a mesma coisa com `{!props ?` e ver ele em conjunto com a imagem fazer o lazing. Pode estar se perguntando porque fiz eles de forma separada. É porque eles podem ter tempo de carregamento diferentes. Numa primeira concepção eu os fiz juntos mas depois achei melhor mudar. 

### @TODO:

- Filtrar por id do pokemon (não vi muito sentido mas...é regra de negócio então).

- Pokedex recebendo os pokemons selecionados, informando o preço, permitir deletar da pokedex algum pokemon adicionado e o total da compra e a rotina para finalizar a compra (modal de confirmação talvez).

### Backlog (testes unitários efetuados):

- Listagem regressiva sendo permitida (lógica para impedir)
