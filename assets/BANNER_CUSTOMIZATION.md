# Guia de Personalização do Banner SVG

Este guia explica como personalizar o banner `banner.svg` para ajustar cores, elementos e efeitos visuais.

## Estrutura do Banner

O banner é composto por:
- **Fundo**: Gradiente escuro com padrão de ruído
- **Elementos decorativos**: Pipelines, shields, containers, gráficos de radar, blocos de código
- **Texto**: Nome, título e frase de impacto

## Personalização Rápida

### 1. Cores Principais

As cores principais estão definidas em vários lugares. Para mudar o esquema de cores:

**Azul principal (#3b82f6)**: Cor primária usada em shields, pipelines e texto de destaque
- Procure por `#3b82f6` e substitua pela cor desejada
- Exemplo: `#10b981` (verde), `#f59e0b` (laranja), `#ef4444` (vermelho)

**Roxo secundário (#8b5cf6)**: Cor secundária usada em elementos complementares
- Procure por `#8b5cf6` e substitua
- Exemplo: `#06b6d4` (ciano), `#ec4899` (rosa)

**Fundo**: Gradiente em `bgGradient`
- Linhas 5-7: Ajuste `stop-color` para cores de fundo diferentes
- Exemplo para tema mais claro: `#1a1f3a`, `#2d3748`, `#1a202c`

### 2. Intensidade dos Efeitos

**Glow (Brilho)**:
- Linha 19: `stdDeviation="4"` - Aumente para mais brilho (ex: 6, 8)
- Linha 30: `stdDeviation="6"` - Glow mais forte

**Sombra**:
- Linha 28: `stdDeviation="5"` - Aumente para sombra mais suave (ex: 7, 10)
- Linha 28: `flood-opacity="0.4"` - Aumente para sombra mais visível (ex: 0.6)

**Opacidade dos Elementos**:
- Linha 46: `opacity="0.2"` - Pipelines (0.1 = mais sutil, 0.4 = mais visível)
- Linha 54: `opacity="0.15"` - Blocos de código
- Linha 61: `opacity="0.5"` - Shield principal

### 3. Posicionamento dos Elementos

**Shield** (linha 61):
- `translate(70, 90)` - Primeiro número = horizontal, segundo = vertical
- Aumente para mover para direita/baixo, diminua para esquerda/cima

**Container** (linha 77):
- `translate(650, 70)` - Ajuste para reposicionar

**Gráfico Radar** (linha 83):
- `translate(180, 140)` - Ajuste posição

**Blocos de Código** (linha 54):
- `x="40" y="70"` - Posição inicial
- `width="140" height="24"` - Tamanho

### 4. Texto

**Nome** (linha 99):
- `font-size="44"` - Tamanho da fonte
- `fill="#ffffff"` - Cor do texto
- `font-weight="700"` - Peso (400 = normal, 700 = bold)

**Título** (linha 110):
- `font-size="26"` - Tamanho
- `fill="#8b9dc3"` - Cor (cinza azulado)

**Frase de Impacto** (linha 121):
- `font-size="20"` - Tamanho
- `fill="#3b82f6"` - Cor (azul principal)

### 5. Altura do Banner

**Linha 1**: `height="300"` - Aumente para banner mais alto (ex: 320, 350)

## Temas Pré-configurados

### Tema Verde/Azul (Segurança/Ambiente)
Substitua:
- `#3b82f6` → `#10b981` (verde)
- `#8b5cf6` → `#06b6d4` (ciano)

### Tema Laranja/Vermelho (Alerta/Urgência)
Substitua:
- `#3b82f6` → `#f59e0b` (laranja)
- `#8b5cf6` → `#ef4444` (vermelho)

### Tema Ciano/Rosa (Moderno/Tech)
Substitua:
- `#3b82f6` → `#06b6d4` (ciano)
- `#8b5cf6` → `#ec4899` (rosa)

## Adicionar Novos Elementos

Para adicionar novos elementos visuais:

1. **Crie um grupo `<g>`**:
```svg
<g opacity="0.15" transform="translate(X, Y)">
  <!-- Seus elementos aqui -->
</g>
```

2. **Use formas básicas**:
- `<rect>` - Retângulos
- `<circle>` - Círculos
- `<path>` - Formas complexas
- `<line>` - Linhas
- `<polygon>` - Polígonos

3. **Aplique efeitos**:
- `filter="url(#glow)"` - Brilho
- `filter="url(#shadow)"` - Sombra
- `opacity="0.X"` - Transparência

## Dicas

- **Mantenha opacidade baixa** (0.1-0.3) para elementos decorativos
- **Use cores consistentes** com o tema do perfil
- **Teste no GitHub** após mudanças (pode levar alguns minutos para atualizar)
- **Mantenha backup** do arquivo original antes de grandes mudanças

## Exemplo: Banner Mais Minimalista

Para um visual mais limpo:
1. Aumente opacidade do fundo de ruído para `opacity="0.7"`
2. Reduza opacidade dos elementos decorativos para `0.05-0.1`
3. Remova ou comente elementos desnecessários
4. Aumente espaçamento entre linhas de pipeline

## Exemplo: Banner Mais Vibrante

Para mais impacto visual:
1. Aumente `stdDeviation` dos filtros glow para 8-10
2. Aumente opacidade dos elementos para 0.3-0.4
3. Use cores mais saturadas
4. Adicione mais elementos decorativos

