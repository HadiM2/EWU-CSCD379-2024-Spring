// plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark', 
      themes: {
        overall: {
          dark: false,
          colors: {
            primary: "#0050cb",
            secondary: "#003079",
            background: '#111928',
            
          },
        },
        overallDark:{
          dark: true,
          colors: {
            primary: '#0050cb',
            secondary: '#003079',
            background: '#121212',
          },
        },
        murica: {
          dark: false,
          colors: {
            primary: '#0000ff',
            secondary: '#ff0000',
            background: '#ffffff',
          },
        },
        muricaDark:
        {
          dark: true,
          colors: {
            primary: '#0000ff',
            secondary: '#ff0000',
            background: '#121212',
          },
        },
        countryGreen: {
          dark: false,
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#FFFFFF',
          },
        },
        countryGreenDarkMode:
        {
          dark: true,
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#121212',
          },
        },
        light: {
          dark: false,
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#8bc34a',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#121212',
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
