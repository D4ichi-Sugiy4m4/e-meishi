import {
  Box,
  Grid,
  Typography,
  Divider,
  Fab,
  Backdrop,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import OthersInfoCard from "components/molecules/InfoCard";
import InfoModal from "components/molecules/InfoModal";
import {
  useRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { useOthersList } from "store/others/OthersList";
import { OthersAddModalState } from "store/others/OthersAddModal";

const List = () => {
  const itemData = useRecoilValueLoadable(useOthersList);
  const [modal, setModal] = useRecoilState(OthersAddModalState);

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
            {itemData.getValue().data.map((item) => (
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
          setModal({
            isOpen: true,
          });
        }}
      >
        <Add />
      </Fab>
      <InfoModal
        title={"外部者を追加する"}
        open={modal.isOpen}
        setModal={setModal}
      />
      <Backdrop
        open={itemData.state === "loading"}
      />
    </>
  );
};

export default List;
