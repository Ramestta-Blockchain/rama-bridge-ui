import { ConnectButton } from '@rainbow-me/rainbowkit';
import cwd from '../../icons/cwd.svg'
import cwl from '../../icons/cwl.svg'
import Link from 'next/link';
import Iconbuttoncustom from '@/theme/components/iconbuttoncustom';
// import disconnect from '../../icons/disconnect.svg'
// import disconnectd from '../../icons/disconnectd.svg'
import { useContext } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import IconButtonBridge from '@/theme/components/iconButtonBridge';
 


const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.contrastText,
  padding: "14px 16px",
  borderRadius: '8px',
  display:'block',
  textDecoration:'none',
}));

const ConnectWallet = () => {
  const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Link onClick={openConnectModal} href={''} >
                    <IconButtonBridge icon={theme.palette.mode === "dark" ? cwd:cwl} text={'Connect Wallet'}/>
                  </Link>
                );
              }
              if (chain.unsupported) {
                return (
                  
                    
                  <StyledLink onClick={openChainModal} href={"#"}>
                   
                  <Box m={0} component={'p'}>Wrong network</Box>
              </StyledLink>
                );
              }
              return (
                <Box >
                    <Iconbuttoncustom  Text__button={`${account.displayName}`} onClick={openAccountModal}/>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet