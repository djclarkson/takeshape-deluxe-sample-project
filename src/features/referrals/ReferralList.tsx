import { BsGiftFill } from 'react-icons/bs';
import { Alert, Box, Text } from 'theme-ui';
import type { ReferralListItemProps } from './ReferralListItem';
import ReferralListItem from './ReferralListItem';

export interface Reward {
  name: string;
  code: string;
}

const reward: Reward = {
  name: '20% Off One Order',
  code: '1XGHc80'
};

export interface ReferralListProps {
  referrals: ReferralListItemProps[];
}

export const ReferralList = ({ referrals }) => {
  return (
    <Box as="ul" sx={{ listStyleType: 'none', padding: 0 }}>
      {referrals.map((referral) => (
        <Box as="li" key={referral.email} sx={{ margin: '1rem 0' }}>
          <ReferralListItem {...referral} />
          {referral.earned && (
            <Alert backgroundColor="highlight" color="text" sx={{ gap: '1rem' }} m={2} ml={4}>
              <BsGiftFill />
              <Text>{reward.name}</Text>
              <Text sx={{ fontWeight: 'normal' }}>Use code {reward.code} at checkout</Text>
            </Alert>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ReferralList;
