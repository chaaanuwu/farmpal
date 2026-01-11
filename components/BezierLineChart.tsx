import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function GradientBezierChart() {
  const screenWidth = Dimensions.get("window").width - 55;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          marginBottom: 12,
          color: "#111",
        }}
      >
        Visitors Trend
      </Text>

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [120, 200, 180, 250, 210, 300],
              color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`, // line color
              strokeWidth: 3,
            },
          ],
        }}
        width={screenWidth}
        height={220}
        yAxisSuffix="k"
        withDots={true}
        withShadow={true} // this enables area under the curve
        withInnerLines={false}
        withOuterLines={true}
        bezier
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#ffffff", // top of chart
          backgroundGradientTo: "#ffffff",   // bottom of chart stays white
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`, // line color
          labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            stroke: "transparent", // hide background grid
          },
          propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: "#4ade80",
          },
          fillShadowGradient: "#4ade80",       // gradient color for area under curve
          fillShadowGradientOpacity: 0.2,      // subtle fade
        }}
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
}
