import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => ({
  font: {
    color: theme.palette.primary.dark
  }
});

const TopPage: React.FC<WithStyles<typeof styles>> = (props) => {
  const { classes } = props;

  return (
    <div>
      <h1 className={classes.font}>Welcome Home!</h1>
    </div>
  );
};

export default withStyles(styles)(TopPage);
