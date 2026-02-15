import { Box } from "@chakra-ui/react";

import { HeroHeader } from "./HeroHeader";
import { HeaderBanner } from "./HeaderBanner";

function Header() {
  return (
    <Box>
      <HeroHeader />
      <HeaderBanner />
    </Box>
  );
}

export default Header;
