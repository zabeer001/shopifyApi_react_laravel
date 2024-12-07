import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import AppRoutes from './AppRoutes';





const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
