import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { getWallets } from "@starknet-io/cms-data/src/wallets";
interface Props extends LocaleProps {
  noOfItems?: number;
}

export default async function BlockWallets({
  noOfItems,
  params: { locale },
}: //@ts-expect-error
Props): JSX.Element {
  const wallets = await getWallets(locale);

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {wallets.map((wallet, i) => {
            if (noOfItems && i <= noOfItems) return null;
            return (
              <ListCard
                href={wallet.website_url}
                twitterHandle={wallet.twitter}
                discordHandle={wallet.discord}
                image={wallet.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={wallet.name}
                description={wallet.description}
                title={wallet.name}
                type_list={wallet.type_list}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
