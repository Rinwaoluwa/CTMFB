import Icon from "../../assets/svgs/icon";
import Box from "./Box";
import Text from "./Text";

interface IProps {
  name: string;
  date: string;
  amount: string;
  balance: string;
  debit: boolean;
}

function TransactionItem({
  name = "Grace Ameh",
  date = "15 Oct 2022, 10:00PM",
  amount = "10,000",
  balance = "NGN101,203.94",
  debit,
}: IProps) {
  return (
    <Box
      borderBottomColor="lightGrey"
      borderBottomWidth={1}
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom='space-12'
      marginBottom='space-4'
    >
      <Box flexDirection="row" gap='space-8'>
        <Box
          backgroundColor="lightGrey"
          height={50}
          width={50}
          borderRadius="space-48"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="paper_plane" />
        </Box>

        <Box>
          <Text color="black" variant="body-medium">
            {name}
          </Text>
          <Text color="grey" variant="caption-medium">
            {date}
          </Text>
        </Box>
      </Box>

      <Box>
        <Text color={debit ? "red" : "green"} variant="body-medium" textAlign='right'>
          {debit ? `-${amount}` : `+${amount}`}
        </Text>
        <Text color="grey" variant="caption-medium">
          {balance}
        </Text>
      </Box>
    </Box>
  );
}

export default TransactionItem;
