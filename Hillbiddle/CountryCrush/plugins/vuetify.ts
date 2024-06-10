// plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light', 
      themes: {
        overall: {

          colors: {
            primary: "#0050cb",
            secondary: "#003079",
            background: "#538bf5",
            
          },
        },
        overallDark:{

          colors: {
            primary: '#0050cb',
            secondary: '#003079',
            background:  '#111928',
          },
        },
        murica: {

          colors: {
            primary: '#0000ff',
            secondary: '#ff0000',
            background: '#ff3030',
          },
        },
        muricaDark:
        {
          colors: {
            primary: '#0000ff',
            secondary: '#ff0000',
            background: '#831b1b',
          },
        },
        countryGreen: {
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#8bc34a',
          },
        },
        countryGreenDark:
        {
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#121212',
          },
        },
        light: {
          colors: {
            primary: '#388E3C',
            secondary: '#8bc34a',
            background: '#8bc34a',
            
          },
        },
        dark: {
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
