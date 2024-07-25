import { ScrollView, View } from "react-native";
import Box from "../design-system/components/Box";
import Card from "../design-system/components/Card";
import Header from "../design-system/components/Header";
import { FLEX, services, transactions } from "../utils/constants";
import Text from "../design-system/components/Text";
import { Button } from "../design-system/components/button/button";
import { getComputedWidth } from "../design-system/layout/responsive";
import ServiceItem from "../design-system/components/ServiceItem";
import { IconName } from "../assets/svgs/types";
import TransactionItem from "../design-system/components/TransactionItem";

function Dashboard() {
  return (
    <ScrollView>
      <Box style={FLEX} marginHorizontal="space-24" marginTop="space-64">
        <Header />
        <Card />

        {/* Service Section. */}
        <>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginVertical="space-16"
          >
            <Text variant="heading-3">Services</Text>
            <Button
              title="View all"
              backgroundColor="lightGrey"
              color="green"
              style={{
                width: getComputedWidth(100),
                height: 50,
              }}
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
            <Text variant="heading-3">Recent Transactions</Text>
            <Button
              title="View all"
              backgroundColor="lightGrey"
              color="green"
              style={{
                width: getComputedWidth(100),
                height: 50,
              }}
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
          {/* <TransactionItem /> */}
        </>
      </Box>
    </ScrollView>
  );
}

export default Dashboard;
