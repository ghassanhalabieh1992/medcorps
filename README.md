# Medcorps

Site institucional da Clínica Medcorps (Florianópolis, SC), construído com React + Vite.

## Desenvolvimento local

1. Instale as dependências:
   ```
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Build de produção:
   ```
   npm run build
   ```
4. Pré-visualizar o build:
   ```
   npm run preview
   ```

## Deploy (Vercel)

O projeto está configurado para deploy direto na [Vercel](https://vercel.com):

1. Importe o repositório no dashboard da Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build` · Output directory: `dist`.
4. Cada push para a branch principal gera um novo deploy automaticamente.

O arquivo `vercel.json` já inclui o rewrite necessário para o roteamento client-side (React Router).
