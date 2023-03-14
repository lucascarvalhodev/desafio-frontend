# 🏁 Desafio de programação - Vaga Front-End 🏁

**Este teste tem por objetivos principais avaliar:**

- Habilidades no desenvolvimento frontend
- Conceitos de UI e UX aplicados

---

## Instruções

- Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
- Em seguida, implemente o projeto tal qual descrito abaixo, em seu clone local.
- Por fim, envie via email um arquivo patch para seu contato na Bycoders\_.

---

## Desafio 🚀 🚀 🚀

![screen](/image.png)

O desafio consiste em criar um projeto com o design da imagem **acima**, utilizando a [API do YouTube](https://developers.google.com/youtube/v3)

Utilize a [documentação](https://developers.google.com/youtube/v3/docs) para se orientar em como criar uma conta, logar no app, listar os vídeos do usuário, se inscrever em canais, enviar vídeos, ou o que mais você precisar.

O layout da **home** não precisa ser exatamente como o do wireframe. Você pode ficar a vontade para exibir os conteúdos/vídeos que achar melhor, desde que qualquer informação (vídeo, texto, cores, imagens) sejam exibidos de maneira organizada e bem distribuida entre a tela, fornecendo uma boa experiência para o usuário.

**Antes de iniciar o teste**

1. Crie um projeto no [console de desenvolvedor](https://console.developers.google.com/projectcreate) da **Google**
2. Ative a [YouTube Data API v3](https://console.developers.google.com/apis/api/youtube.googleapis.com/overview) nele
3. Crie uma credencial de acesso para que seu app possa se comunicar com a API

**Requisitos esperados na entrega do teste**

- [ ] Fornecer um mecanismo para o usuário poder pesquisar vídeos
- [ ] Possuir home page que exiba algum conteúdo interessante para uma plataforma de vídeos
- [ ] Fornecer uma estrutura de gerência do estado da aplicação
- [ ] Possuir histórico das buscas realizadas (persistir localmente)

**Requisitos extras**

- [ ] Permitir cadastro de usuário / login através da API do YouTube + OAuth2
- [ ] Permitir upload de vídeo para a API do YouTube

---

## Pontos principais

- Clean code
- Conhecimento de boas práticas / design patterns
- Demonstração de boa gestão do estado do app

---

## Pontos extras

- Uso de frameworks / libs
- Testes
- Componetização do app
- Uso de linters

---

### Instalação

1. Clonar repositório:

```sh
git clone https://github.com/lucascarvalhodev/desafio-frontend.git
```

2. Instalar dependências.

```sh
npm install
```

3. Atualizar .env

```sh
VITE_HOST=http://localhost:5173
VITE_GOOGLE_REDIRECT_URI=/auth/callback
VITE_GOOGLE_REGISTER=https://accounts.google.com/signup
VITE_GOOGLE_OAUTH=https://accounts.google.com/o/oauth2/auth
VITE_GOOGLE_BASE_URL=https://www.googleapis.com/youtube/v3
VITE_GOOGLE_CLIENT_ID=[SEU_CLIENT_ID_OATH_GOOGLE]
VITE_GOOGLE_API_KEY=[SUA_API_KEY_GOOGLE]
```

voce pode obter suas credenciais no aqui => [console de desenvolvedor](https://console.cloud.google.com/apis/credentials)

exemplo de como configurar a Origens JavaScript autorizadas e URIs de redirecionamento autorizados do cliente OAuth 2.0.

![screen](/image2.png)

4. rode o projeto

```sh
npm run dev
```
