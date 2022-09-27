import {
  Grid,
  Box,
  Paper,
  TextField,
  Fab,
} from "@material-ui/core"
import { Add } from "@material-ui/icons";
import BusinessCard from "components/molecules/BusinessCard"
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect, useState } from "react"

const itemData = [
  {
    othersId: "m8HmMRHRXi",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    created: "2022-09-01",
  },
  {
    othersId: "DHp8dfcDi5",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    created: "2021-08-02",
  },
  {
    othersId: "aAVQsgz2AC",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    created: "2020-07-03",
  },
];

const userData = {
  company: "株式会社TestUser",
  department: "開発部",
  rank: "副部長",
  name: "Test User",
  phone: "090-1234-5678",
  mail: "hoge@huga.com",
};

const labels = ["会社名", "部署", "役職", "名前", "電話番号", "メールアドレス"];

const Edit = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState("");

  const [items, setItems] = useState({
    company: "",
    department: "",
    rank: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(()=>{
    setItems(userData)
  }, [])

  const handleOnChangeImage = async (e) => {
    const { files } = e.target;
    setImage(window.URL.createObjectURL(files[0]));
  };

  return (
    <>
      <Box pt={8}>
        {/* 自分の情報 */}
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
                        setItems((prevState) => ({
                          ...prevState,
                          [item]: e.target.value,
                        }));
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>

        {/* 自分の名刺一覧 */}
        <Box p={1}>
          <Grid container spacing={1}>
            {itemData.map((item) => (
              <Grid item xs={12}>
                <BusinessCard item={item} />
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
          setIsOpen(true)
        }}
      >
        <Add />
      </Fab>
      
      <CardAddModal
        title={"あなたの名刺を追加"}
        open={isOpen}
        image={image}
        handleOnChangeImage={handleOnChangeImage}
        handleOnClose={() => {
            setIsOpen(false)
            setImage("")
        }}
      />
    </>
  )
}

export default Edit