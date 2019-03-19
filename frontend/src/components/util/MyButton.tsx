import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

interface MyButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const MyButton = (props: MyButtonProps) => (
  <Button {...props} component={Link as any} />
)

export default MyButton;
