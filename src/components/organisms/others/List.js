import {
  Box,
  Grid,
  Typography,
  Divider,
  Fab,
  Backdrop,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import OthersInfoCard from "components/molecules/InfoCard";
import InfoModal from "components/molecules/InfoModal";
import getOthers from "api/others/get";

const List = () => {
  const [othersList, setOthersList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getOthersList = async () => {
    const res = await getOthers();
    setOthersList(res.data)
  }

  useEffect(() => {
    getOthersList();
  }, []);

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
            {console.log(othersList)}
            {othersList.length > 0 && othersList.map((item) => (
              <Grid key={`${item.othersId}_grid`} item>
                <OthersInfoCard
                  key={`${item.othersId}_card`}
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
          setIsOpenModal(true);
        }}
      >
        <Add />
      </Fab>
      <InfoModal
        title={"外部者を追加する"}
        open={isOpenModal}
        setModal={setIsOpenModal}
      />
      <Backdrop open={othersList.length === 0} />
    </>
  );
};

export default List;
