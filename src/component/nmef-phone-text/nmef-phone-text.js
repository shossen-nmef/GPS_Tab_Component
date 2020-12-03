
import React,{Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Cleave from "cleave.js/react";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1)
    }
});

function CleaveInput(props) {
    const { inputRef, ...rest } = props;
    return (
        <Cleave
            // ref={inputRef}
            options={{
                numericOnly: true,
                blocks: [0, 3, 3, 4, 10],
                delimiters: ["(", ") ", "-", " x"],
                delimiterLazyShow: true
            }}
            {...rest}
        />
    );
}


class FormattedInputs extends Component {
    
    render() {
        const { classes } = this.props;
        const { cleave } = this.props.value;

        return (
            <div className={classes.container}>
                <TextField
                    className={classes.formControl}
                    value={cleave}
                    size="small"
                    fullWidth
                    color="secondary"
                    placeholder={this.props.placeholder}
                    variant="outlined"
                    onChange={this.props.onChange("cleave")}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: CleaveInput
                    }}
                />
            </div>
        );
    }
}


export default withStyles(styles)(FormattedInputs);
