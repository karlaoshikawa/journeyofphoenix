![Guilda das Guerreiras de Fogo](https://raw.githubusercontent.com/karlaoshikawa/journeyofphoenix/refs/heads/main/public/deploy.png "Guilda das Guerreiras de Fogo")

# Journey of Fenix

Este é um projeto desenvolvido com [Next.js](https://nextjs.org), que utiliza conceitos modernos de desenvolvimento web, como **glassmorphism**, **neomorphism** e animações interativas. O objetivo do projeto é criar uma interface visual rica para explorar informações sobre a **Guilda das Guerreiras de Fogo**.

Veja o projeto em: https://journeyofphoenix-git-main-karlaoshikawas-projects.vercel.app/

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Next/Image**: Otimização de imagens integrada ao Next.js.

## Extenções do vsCode
Para vizualizar as classes do tailwind **Tailwind CSS IntelliSense**

## 🤖 IA

- **Imagens**: [Leonardo AI](https://app.leonardo.ai/).
- **Textos**: [DeepSeek](https://www.deepseek.com/).
- **Código**: [GitHub Copilot](https://github.com/features/copilot).

## ✨ Funcionalidades

- **Guilda das Guerreiras de Fogo**:
  - Exibição de informações detalhadas sobre a guilda, seus membros e habilidades.
  - Galeria de imagens interativa com modal para visualização ampliada.

- **Efeitos Visuais**:
  - **Glassmorphism**: Fundo translúcido com desfoque.
  - **Neomorphism**: Sombras suaves para criar um efeito de relevo.

- **Animações**:
  - Transições suaves ao carregar elementos.
  - Interatividade ao clicar em imagens e botões.

## 📂 Estrutura do Projeto

- **`app/components`**: Contém os componentes reutilizáveis, como `SideBox` e `InformationBox`.
- **`app/utils`**: Contém dados estáticos, como informações sobre a guilda e habilidades.
- **`app/page.tsx`**: Página principal do projeto.

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/karlaoshikawa/journeyofphoenix.git
   cd journeyofphoenix
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## 🗂️ Estrutura de Dados

Os dados do projeto estão localizados no arquivo `app/utils/informations.tsx`. Aqui estão alguns exemplos:

- **Guilda**:
  ```tsx
  {
    title: "Guilda das Guerreiras de Fogo",
    image: "/guilda.png",
    description: "A Guilda das Guerreiras de Fogo é composta por mulheres destemidas.",
    descriptionModal: "Elas dominam as chamas para proteger seu povo...",
  }
  ```

- **Habilidades**:
  ```tsx
  {
    title: "Skills",
    image: "/power.jpg",
    description: "Habilidades únicas das Guerreiras de Fogo.",
    descriptionModal: "Seus poderes incluem a capacidade de criar explosões de fogo...",
  }
  ```

## 🌐 Deploy

Este projeto pode ser facilmente implantado na [Vercel](https://vercel.com/), a plataforma oficial para Next.js.

1. Faça login na Vercel.
2. Clique em **New Project** e importe o repositório.
3. Configure as variáveis de ambiente, se necessário.
4. Clique em **Deploy**.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 👩‍💻 Autora

Karla Oshikawa

[Linkedin](https://www.linkedin.com/in/karlaoshikawa/)  
[Instagram](https://www.linkedin.com/in/karlaoshikawa/)

