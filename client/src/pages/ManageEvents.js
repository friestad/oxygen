import React from "react";
import { DisplayMapClass } from "../components/DisplayMapClass";
import {
Form,
FormGroup,
TextInput,
TextArea,
Select,
SelectItem,
Button,
Accordion,
AccordionItem,
ModalWrapper,
HeaderGlobalAction
} from "carbon-components-react";



export class ManageEvents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {addressField: ""};
		this.changeAddressField = this.changeAddressField.bind(this)
		this.stringChange = this.stringChange.bind(this)
	}
	changeAddressField(event) {
		console.log(this.state)
		this.setState({addressField: event.target.value})
		
	  }
	stringChange() {
	let str = this.state.addressField;
	let newstr = str.replace(/\s/g, '+');
	console.log(newstr);
	}
    render(){
        return(<div className="page-content"><Form>
            <ModalWrapper
            buttonTriggerText="Create New Event"
            modalHeading="New Event"
            modalLabel="Creation"
			handleSubmit = {this.stringChange}
			
			>
            <FormGroup>
              <TextInput 
                helperText="Street Address and City"
                id="test2"
                invalidText="Invalid error message."
                labelText="Starting Address"
                placeholder="Starting Address Here"
				onChange={this.changeAddressField}
				onSumbit={this.changeAddressField}
              />
            </FormGroup>
            <FormGroup>
            <TextArea
              cols={50}
              helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
              id="test5"
              invalidText="Invalid error message."
              labelText="Description"
              placeholder="Enter any extra information about the protest here."
              rows={4}
            />
            </FormGroup>
            </ModalWrapper>
            
            
          </Form>
          
            
          
          
          </div>
          );
    }
	
}



