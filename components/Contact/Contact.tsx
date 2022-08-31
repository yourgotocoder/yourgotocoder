import { Box, Button, Stack, Tooltip } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "./Contact.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import ContactItem from "./ContactItem";

type ContactItemType = {
  title: string;
  link: string;
  iconColor: string;
  iconHoverColor: string;
  el: ReactNode;
};

const SocialLinks: ContactItemType[] = [
  {
    title: "GitHub Portfolio",
    link: "https://github.com/yourgotocoder",
    iconColor: "gray",
    iconHoverColor: "black",
    el: <GitHubIcon fontSize="large" />,
  },
  {
    title: "LinkedIn Portfolio",
    link: "https://www.linkedin.com/in/sudarshan-rai-19905017a/",
    iconColor: "#0B66C2",
    iconHoverColor: "royalblue",
    el: <LinkedInIcon fontSize="large" />,
  },
  {
    title: "My Twitter Page",
    link: "https://twitter.com/yourgotocoder",
    iconColor: "##1D9BF0",
    iconHoverColor: "#0185C6",
    el: <TwitterIcon fontSize="large" />,
  },
];

const Contact = (props) => {
  return (
    <main className={styles["contact-layout"] }>
      <div className={styles["contact-card"] }>
        <Stack>
          {SocialLinks.map((item) => (
            <ContactItem
              title={item.title}
              link={item.link}
              iconColor={item.iconColor}
              iconHoverColor={item.iconHoverColor}
              key={item.link}
            >
              {item.el}
            </ContactItem>
          ))}
          <a
            href="mailto:sudarshan@yourgotocoder.com?cc=yourgotocoder@gmail.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Box sx={{mt: 1, mb: 1, }}>
              <Tooltip title="Email Me" placement="right">
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "#0185C6",
                    },
                    minWidth: "40px"
                  }}
                >
                  <AttachEmailOutlinedIcon fontSize="large"/>
                </Button>
              </Tooltip>
            </Box>
          </a>
        </Stack>
      </div>
      ;
    </main>
  );
};

export default Contact;
