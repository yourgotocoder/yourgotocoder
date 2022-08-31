import { Box, Button, Tooltip } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  link: string;
  title: string;
  iconColor: string;
  iconHoverColor: string;
};

const ContactItem = (props: Props) => {
  return (
    <Box sx={{mt: 1, mb: 1, }}>
      <Tooltip title={props.title} placement="right">
        <a href={props.link} target="_blank" rel="noreferrer">
          <Button
            sx={{
              color: `${props.iconColor}`,
              "&:hover": {
                color: `${props.iconHoverColor}`,
              },
              minWidth: "40px"
            }}
          >
            {props.children}
          </Button>
        </a>
      </Tooltip>
    </Box>
  );
};

export default ContactItem;
