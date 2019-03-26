import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme): StyleRules => createStyles({
  font: {
    color: theme.palette.primary.dark
  }
});

interface Props extends WithStyles<typeof styles>{};

const TopPage: React.FC<Props> = (props: Props) => {
  const { classes } = props;

  return (
    <div>
      <h1 className={classes.font}>Welcome Home!</h1>
    </div>
  );
};

export default withStyles(styles)(TopPage);
