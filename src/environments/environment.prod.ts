// src/environments/environment.prod.ts
export const environment = {
    production: true,
    apiKey: process.env['NG_APP_API_KEY'] || ''
};