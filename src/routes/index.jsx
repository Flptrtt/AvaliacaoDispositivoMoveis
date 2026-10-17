import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

const TIPO_DE_NAVEGACAO = "bottom"; // "stack" | "bottom" | "drawer"

export function Routes() {
  return (
    <NavigationContainer>
      {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes />}
      {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
      {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
    </NavigationContainer>
  );
}