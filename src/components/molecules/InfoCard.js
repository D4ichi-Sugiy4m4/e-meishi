import React, { useRef, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardHeader,
  Divider,
  Paper,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { MoreVert } from "@material-ui/icons";
import LongMenu from "./LongMenu";

const InfoCard = ({
  othersId = "",
  img = "",
  name = "",
  company = "",
  setIsOpenDialog = () => {},
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  const handleToggleMenu = () => {
    setIsOpenMenu((prevOpen) => !prevOpen);
  };
  const handleToggleDialog = () => {
    setIsOpenDialog((prevOpen) => !prevOpen);
  };
  const handleCloseMenu = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setIsOpenMenu(false);
  };

  const actions = [
    {
      title: "この人の情報",
      color: "inherit",
      onClick: () => {
        handleToggleMenu();
        handleToggleDialog();
      },
    },
    {
      title: "この人の名刺",
      color: "inherit",
      to: `/others/${othersId}/cards`,
    },
    {
      title: "人物を削除",
      color: "error",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Grid item key={othersId}>
        <Paper>
          <Card style={{ backgroundColor: grey[50] }} key={othersId}>
            <CardHeader
              action={
                <IconButton
                  id={`info-about-${name}`}
                  aria-label={`info-about-${name}`}
                  ref={anchorRef}
                  onClick={handleToggleMenu}
                >
                  <MoreVert style={{ color: grey[600] }} />
                </IconButton>
              }
              title={<Typography>{name}</Typography>}
              subheader={<Typography>{company}</Typography>}
            />
            <Divider />
            <CardContent>
              <img
                src={`${img}`}
                srcSet={`${img}`}
                alt={name}
                width={300}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <LongMenu
        anchorEl={anchorRef.current}
        actions={actions}
        open={isOpenMenu}
        handleClose={handleCloseMenu}
      />
    </>
  );
};

export default InfoCard;
