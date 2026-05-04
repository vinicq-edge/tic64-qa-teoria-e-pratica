# QA-TIC64 — Portal da Turma

Portal estático da turma **QA-TIC64 / OxeTech Academy · 2026** com contatos, canais oficiais de comunicação e listagem das entregas semanais dos alunos.

## Estrutura do projeto

```
tic64/
├── main.html              # Página principal (estrutura HTML)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css     # Estilos da aplicação
    └── js/
        ├── data.js        # Dados dos alunos e paleta de cores
        └── app.js         # Lógica de renderização, busca e navegação
```

## Como executar

Por ser uma página totalmente estática, basta abrir `main.html` em qualquer navegador moderno.

Para uma experiência mais próxima de um servidor real (recomendado em desenvolvimento), use um servidor HTTP simples:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Depois acesse `http://localhost:8000/main.html`.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (CSS Custom Properties)
- JavaScript vanilla (sem frameworks)
- Fonte: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Funcionalidades

- **Contatos & Canais**: cards da equipe (instrutor e monitora) e canais oficiais (e-mail e WhatsApp).
- **Atividade da Semana**: lista pesquisável dos 31 alunos com link direto para a pasta de entrega no Google Drive.
- **Sidebar responsiva**: navegação lateral com versão mobile (hambúrguer + overlay).

## Créditos

Projeto do módulo acadêmico **VERTEX** · QA-TIC64 · 2026.
