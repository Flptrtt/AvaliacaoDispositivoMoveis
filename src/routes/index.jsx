import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";
import { AninhadoRoutes } from "./AninhadoRoutes";

// "stack" | "bottom" | "drawer" | "aninhado"
const TIPO_DE_NAVEGACAO = "aninhado";

export function Routes() {
  return (
    <NavigationContainer>
      {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes />}
      {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
      {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
      {TIPO_DE_NAVEGACAO === "aninhado" && <AninhadoRoutes />}
    </NavigationContainer>
  );
}