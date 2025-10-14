import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        width: 200
    }
});

const CustomSlider = withStyles({
    rail: {
        backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
    },
    track: {
        backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
    }
})(Slider);

export default function ContinuousSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <CustomSlider
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
            />
        </div>
    );
}