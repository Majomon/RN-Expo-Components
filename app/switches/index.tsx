import { ThemeCard } from "@/presentation/shared/ThemeCard";
import { ThemedSwitch } from "@/presentation/shared/ThemedSwitch";
import { ThemeView } from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { Switch } from "react-native";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: true,
  });

  return (
    <ThemeView margin className="mt-2">
      <ThemeCard>
        {/*         <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-2"
        />
      </ThemeCard>
    </ThemeView>
  );
};
export default Switches;
