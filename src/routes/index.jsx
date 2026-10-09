// Arquivo responsável por criar um contexto de navegação
// NavigationContainer: guarda o estado da navegação (Context API) e autoriza o uso do hook useNavigation().
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

// Aqui irá ficar a constante de navegação
// Valores possíveis para a constante - "stack" | "bottom" | "drawer"
const TIPO_DE_NAVEGACAO = "drawer";

export function Routes() {
  return (
    <NavigationContainer>
      {/* Renderização condicional: Só um navegador fica ativo por vez */}
      {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes />}
      {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
      {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
    </NavigationContainer>
  );
}
