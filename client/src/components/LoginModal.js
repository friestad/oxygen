import React from 'react';
import { Button, ModalWrapper, TextInput } from 'carbon-components-react';

export class LoginModal extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		}
  }
  render() {
    return (
			this.props.show &&
      <ModalWrapper
        buttonTriggerText='Launch modal'
        modalHeading='Modal heading'
				modalLabel='Label'
      >
        <TextInput placeholder='Username' />
        <TextInput.PasswordInput placeholder='Password' />
      </ModalWrapper>
    );
  }
}
