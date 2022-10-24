import React from "react";

import { Container, Toolbar, Typography, Button, SvgIcon } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ReactComponent as CanadaSvg } from "../../assets/canada-icon.svg";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Header() {
  return (
    <header>
      <Container
        disableGutters
        sx={{
          mt: 10,
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                mr: 2,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Account Balance
            </Typography>
            <Button
              variant="outlined"
              sx={{
                px: 0,
              }}
              style={{
                borderColor: "#e0e0e0",
                justifyContent: "space-evenly",
              }}
            >
              <FilterListIcon
                sx={{
                  color: "#424242",
                  fontSize: "large",
                }}
              />
              <SvgIcon sx={{ fontSize: 20 }}>
                <CanadaSvg />
              </SvgIcon>
            </Button>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              startIcon={<AddIcon size="12" />}
              variant="outlined"
              style={{
                borderColor: "#e0e0e0",
                marginRight: "10px",
                textTransform: "none",
                color: "#424242",
                fontWeight: "inherit",
              }}
            >
              <span style={{ paddingTop: "2px" }}>Add Money</span>
            </Button>

            <Button
              startIcon={<ArrowForwardIcon size="14" />}
              variant="outlined"
              style={{
                textTransform: "none",
                backgroundColor: "#24a272",
                color: "#fff",
                fontWeight: "inherit",
              }}
            >
              <span style={{ paddingTop: "2px" }}>Select date</span>
            </Button>
          </div>
        </Toolbar>
        <Typography sx={{ pl: "24px", fontSize: "27px", fontWeight: "bold" }}>
          $107,843.82 CAD
        </Typography>
      </Container>
    </header>
  );
}

export default Header;
