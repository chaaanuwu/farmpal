import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type CustomCardProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    title: string;
    count: number;
    percentageChange: number;
    percentArrowIcon: keyof typeof MaterialIcons.glyphMap;
    percentContentColor: string;
    percentViewColor: string;
};

export default function CustomCard({
    icon,
    title,
    count,
    percentageChange,
    percentArrowIcon,
    percentContentColor,
    percentViewColor,
}: CustomCardProps) {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 16,
                flex: 1,
                margin: 8,
               
                elevation: 3,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 2 },
            }}
        >
            <View style={{ flexDirection: 'row',  justifyContent: "space-between", alignItems: "center"}}>
                <MaterialIcons name={icon} size={28} color={Colors.light.textSecondary} />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: percentViewColor,
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 8,
                    }}
                >
                    <MaterialIcons name={percentArrowIcon} size={14} color={percentContentColor} />
                    <Text style={{ color: percentContentColor, marginLeft: 4, fontWeight: "500" }}>
                        {percentageChange}%
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ fontSize: 16, color: Colors.light.textSecondary }}>{title}</Text>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 4, alignSelf: "center" }}>{count}</Text>
            </View>


        </View>
    );
}
