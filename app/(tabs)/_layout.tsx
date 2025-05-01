import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="(home)"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen 
                name="details"
                options={{
                    title: "Details",
                    tabBarIcon: ({color}) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
                }}
            />
        </Tabs>
    );
}