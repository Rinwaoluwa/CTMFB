import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet } from "react-native";
import Box from "../design-system/components/Box";
import Card from "../design-system/components/Card";
import Header from "../design-system/components/Header";
import { cards, FLEX, services, transactions } from "../utils/constants";
import Text from "../design-system/components/Text";
import { Button } from "../design-system/components/button/button";
import {
  getComputedHeight,
  getComputedWidth,
} from "../design-system/layout/responsive";
import ServiceItem from "../design-system/components/ServiceItem";
import { IconName } from "../assets/svgs/types";
import TransactionItem from "../design-system/components/TransactionItem";
import DotIndicator from "../design-system/components/DotIndicator";

function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const cardWidth = getComputedWidth(300) + 12; // card width + margin.
    const index = Math.round(scrollPosition / cardWidth);
    setActiveIndex(index);
  }
  return (
    <ScrollView style={[FLEX, styles.root]}>
      <Header />

      <ScrollView
        style={styles.cardsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            accountName={card?.accountName}
            accountNumber={card?.accountNumber}
            accountType={card?.accountType}
            balance={card?.balance}
            opacity={activeIndex === index ? 1 : 0.6}
          />
        ))}
      </ScrollView>
      <Box
        flexDirection="row"
        justifyContent="center"
        marginTop="space-16"
        gap="space-8"
      >
        {cards.map((_, index) => (
          <DotIndicator bgColor={activeIndex === index ? "green" : 'grey'} />
        ))}
      </Box>
      <Box style={FLEX} marginHorizontal="space-24">
        {/* Service Section. */}
        <>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginVertical="space-16"
          >
            <Text color="black" variant="heading-3">
              Services
            </Text>
            <Button
              title="View all"
              backgroundColor="lightGrey"
              color="green"
              style={{
                width: getComputedWidth(80),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              padding="none"
              paddingHorizontal="none"
              paddingVertical="none"
            />
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="space-between"
            gap="space-8"
          >
            {services.map((service) => (
              <ServiceItem
                name={service?.name as IconName}
                title={service?.title}
                bgColor={service?.bgColor}
              />
            ))}
          </Box>
        </>

        {/* Recent Transactions Section. */}
        <>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginVertical="space-16"
          >
            <Text color="black" variant="heading-3">
              Recent Transactions
            </Text>
            <Button
              title="View all"
              backgroundColor="lightGrey"
              color="green"
              style={{
                width: getComputedWidth(80),
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              padding="none"
              paddingHorizontal="none"
              paddingVertical="none"
            />
          </Box>
          {transactions.map((transaction) => (
            <TransactionItem
              amount={transaction?.amount}
              balance={transaction?.balance}
              date={transaction?.date}
              debit={transaction?.debit}
              name={transaction?.name}
              key={transaction?.amount}
            />
          ))}
        </>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: getComputedHeight(30),
  },

  cardsContainer: {
    marginLeft: getComputedWidth(20),
    marginTop: getComputedHeight(16),
  },
});

export default Dashboard;
