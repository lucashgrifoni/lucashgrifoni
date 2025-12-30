# Assets

Esta pasta contém recursos visuais utilizados no Profile README.

## Arquivos

- **banner.svg** - Banner principal do perfil com tema AppSec/DevSecOps

## Como usar

### Banner

O banner (`banner.svg`) é referenciado no README principal. Para personalizar:

1. Edite o arquivo `banner.svg` diretamente
2. Os elementos principais são:
   - Gradientes de fundo (definidos em `<defs>`)
   - Elementos visuais (pipelines, shields, containers, gráficos)
   - Texto (nome, título, frase de impacto)
3. Mantenha a estrutura SVG para compatibilidade com GitHub

### Adicionar imagens

Para adicionar novas imagens (ex: screenshots de projetos, logos):

1. Coloque o arquivo nesta pasta (`assets/`)
2. Referencie no README usando:
   ```markdown
   ![Descrição](./assets/nome-do-arquivo.png)
   ```
3. Para imagens maiores:
   ```markdown
   <img src="./assets/minha-imagem.png" width="400" alt="Descrição" />
   ```

### Formatos suportados

- SVG (recomendado para logos e ilustrações)
- PNG (para screenshots e imagens complexas)
- JPG (para fotos, se necessário)

### Boas práticas

- Mantenha arquivos otimizados (tamanho reduzido)
- Use SVG quando possível (escala melhor)
- Nomes de arquivos em minúsculas com hífens (ex: `appsec-express-logo.svg`)
