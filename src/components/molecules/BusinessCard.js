import React from "react";
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
import { Delete } from "@material-ui/icons";

const BusinessCard = ({ item = {} }) => {
  return (
    <>
      <Grid item key={item.img}>
        <Paper>
          <Card style={{ backgroundColor: grey[50] }} key={item.img}>
            <CardHeader
              action={
                <IconButton
                  onClick={()=>{
                    
                  }}
                >
                  <Delete style={{ color: grey[600] }} />
                </IconButton>
              }
              title={<Typography>{item.created}</Typography>}
            />
            <Divider />
            <CardContent>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.created}
                width={300}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default BusinessCard;
