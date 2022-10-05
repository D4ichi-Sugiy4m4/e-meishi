import { Backdrop, Box, Fab, Grid, Paper, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import BusinessCard from "components/molecules/BusinessCard";
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { CardAddModalState } from "store/CardAddModal";
import { useCardList } from "store/CardList";
import { useOthersApi, useOthersState } from "store/others/Others";

const labels = ["会社名", "部署", "役職", "名前", "電話番号", "メールアドレス"];

const Info = () => {
  const othersInfo = useRecoilValueLoadable(useOthersApi)
  const [items, setItems] = useRecoilState(useOthersState);
  const cardList = useRecoilValueLoadable(useCardList);
  const [modal, setModal] = useRecoilState(CardAddModalState);

  useEffect(() => {
    setItems(othersInfo.getValue().data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box pt={8}>
        {/* 外部者情報 */}
        <Box p={1}>
          <Paper>
            <Box px={2} py={1}>
              <Grid container spacing={1}>
                {Object.keys(items).map((item, index) => (
                  <Grid item xs={12}>
                    <TextField
                      label={labels[index]}
                      value={Object.values(items)[index]}
                      onChange={(e) => {
                        setItems({
                          ...items,
                          [item]: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>

        {/* 外部者名刺一覧 */}
        <Box p={1}>
          <Grid container spacing={1}>
            {cardList.getValue().data.map((card) => (
              <Grid item xs={12}>
                <BusinessCard item={card} />
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
          setModal({ ...modal, isOpen: true });
        }}
      >
        <Add />
      </Fab>

      <CardAddModal
        title={`${items.name}さんの名刺を追加`}
        open={modal.isOpen}
      />
      <Backdrop
        open={othersInfo.state === "loading" || cardList.state === "loading"}
      />
    </>
  );
};

export default Info;
