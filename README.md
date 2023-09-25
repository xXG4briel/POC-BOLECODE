## Instalação

```bash
$ yarn install
```

## Rodar o app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Requisitos

- Node v18.16.0
- Criar uma conta no Itaú: https://devportal.itau.com.br/login
- Gerar credenciais(client_id, client_secret):
  - Acessar a api: https://devportal.itau.com.br/nossas-apis/itau-ep9-gtw-pix-recebimentos-conciliacoes-v2-ext
  - Clicar em API REFERENCE
  - Gerar credenciais

## Rotas

```http
### CRIAR TOKEN
POST http://localhost:3000/auth HTTP/1.1
Content-Type: application/json
{
    "client_id": "SEU_CLIENT_ID",
    "client_secret": "SEU_CLIENT_SECRET"
}

### BOLECODE
POST http://localhost:3000/bolecode/boletos_pix HTTP/1.1

```
