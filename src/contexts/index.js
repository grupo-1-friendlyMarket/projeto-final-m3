import { CatalogueProvider } from "./catalogue/catalogue";
import { ChatProvider } from "./chat";
import { CityProvider } from "./localization";
import {FiltersProvider} from "./filters/filters"

function Providers({ children }) {
  return (
    <>
      <CityProvider>
        <CatalogueProvider>
          <FiltersProvider>
            <ChatProvider> {children} </ChatProvider>
          </FiltersProvider>
        </CatalogueProvider>
      </CityProvider>
    </>
  );
}

export default Providers;
