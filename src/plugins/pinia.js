import { createPinia } from 'pinia'
//import syncStorage from '@/stores/syncStorage';

// Setup Pinia
export const install= (app) => {
  const pinia = createPinia()

  app.use(pinia)
  //pinia.use(({ store }) => syncStorage(store, {}));
}
