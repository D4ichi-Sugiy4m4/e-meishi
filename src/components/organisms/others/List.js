import { Box, Grid, Typography, Divider, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import OthersInfoCard from "components/molecules/InfoCard";
import InfoModal from "components/molecules/InfoModal";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box px={6} pt={8}>
        <Box py={3}>
          <Typography variant="h5">外部者一覧</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            {itemData.map((item) => (
              <Grid item>
                <OthersInfoCard
                  othersId={item.othersId}
                  img={item.img}
                  name={item.name}
                  company={item.company}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Fab
        color="primary"
        style={{
          position: "fixed",
          bottom: "70px",
          right: "30px",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Add />
      </Fab>
      <InfoModal
        title={"外部者を追加する"}
        open={isOpen}
        handleOnClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default List;

const itemData = [
  {
    othersId: "m8HmMRHRXi",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Breakfast",
    company: "@bkristastucchio",
  },
  {
    othersId: "DHp8dfcDi5",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Burger",
    company: "@rollelflex_graphy726",
  },
  {
    othersId: "aAVQsgz2AC",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    name: "Camera",
    company: "@helloimnik",
  },
  {
    othersId: "XWfh3ma6pV",
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    name: "Coffee",
    company: "@nolanissac",
  },
  {
    othersId: "pQ8tRKMaFB",
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    name: "Hats",
    company: "@hjrc33",
  },
  {
    othersId: "ZkLzFZ3hFk",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    name: "Honey",
    company: "@arwinneil",
  },
  {
    othersId: "iBMf9WA9Ym",
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    name: "Basketball",
    company: "@tjdragotta",
  },
  {
    othersId: "6zuF9HfK47",
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    name: "Fern",
    company: "@katie_wasserman",
  },
  {
    othersId: "VRrsMcEESE",
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    name: "Mushrooms",
    company: "@silverdalex",
  },
];