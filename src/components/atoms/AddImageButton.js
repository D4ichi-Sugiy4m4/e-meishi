import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles({
    box: {
        width: 250,
        height: 180,
        border: "5px dashed #bbdefb",
        borderRadius: 15,
        cursor: "pointer",
    },
    icon: {
        width: 80,
        height: 80,
        color: "#bbdefb",
        cursor: "pointer",
    },
})

const AddImageButton = ({
    onChange = () => {}
}) => {
    const classes = useStyles()
    return (
        <Button component="label" className={classes.box}>
            <AddCircleOutline className={classes.icon} />
            <input
            accept="image/*"
            id={"upload-button"}
            type="file"
            hidden
            onChange={onChange}
          />
        </Button>
    )
}

export default AddImageButton