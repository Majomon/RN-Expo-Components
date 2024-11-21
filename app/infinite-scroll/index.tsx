import { useThemeColor } from "@/hooks/useThemeColor";
import { FadeInImages } from "@/presentation/images/FadeInImages";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";

const InfiniteScrollScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        // Porcentaje del scroll para realizar la petición
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};

export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImages
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ width: "100%", height: 400 }}
    />
    /*     <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{ width: "100%", height: 400 }}
    /> */
  );
};
