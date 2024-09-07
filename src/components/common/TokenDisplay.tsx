import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import ether from "../../images/ether.jpg";
import token1 from "../../images/token1.jpg";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

interface TokenUIDisplay {
  name: string;
  avatar: string;
  badge: string;
}

const TokenDisplay = ({ name, avatar, badge }: TokenUIDisplay) => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src={ether} />}
      >
        <Avatar alt="Travis Howard" src={token1} />
      </Badge>
      <Typography variant="h6">{name}</Typography>
    </Stack>
  );
};

export default TokenDisplay;
