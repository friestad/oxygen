import React from "react";
import { DisplayMapClass } from "../components/DisplayMapClass";
import getLocation from "../utils/getLocation";
import { postEvent } from "../utils/postEvent";
import '../styles/ManageEvents.scss';
import {
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
	HeaderGlobalAction,
	DatePicker,
	DatePickerInput,
	TimePicker,
} from "carbon-components-react";

export class ManageEvents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addressField: "",
			addressField2: "",
			name: "",
			date: "",
		};
		this.changeAddressField = this.changeAddressField.bind(this);
		this.stringChange = this.stringChange.bind(this);
		this.changeAddressField2 = this.changeAddressField2.bind(this);
		this.changeName = this.changeName.bind(this);
		this.changeDate = this.changeDate.bind(this);
	}
	changeAddressField(event) {
		console.log(this.state);
		this.setState({ addressField: event.target.value });
	}
	changeAddressField2(event) {
		console.log(this.state);
		this.setState({ addressField2: event.target.value });
	}
	changeName(event) {
		console.log(this.state);
		this.setState({ name: event.target.value });
	}
	changeDate(event) {
		console.log(this.state);
		this.setState({ date: event.target.value });
	}

	async stringChange() {
		let str3 = this.state.name;
		let str4 = this.state.date;
		let str = this.state.addressField;

		let newstr = str.replace(/\s/g, "+");
		let a = await getLocation(newstr);
		let startAddr = a[0].Location.Address.Label;
		let start = [
			a[0].Location.DisplayPosition.Longitude,
			a[0].Location.DisplayPosition.Latitude,
		];

		let str2 = this.state.addressField2;
		let newstr2 = str2.replace(/\s/g, "+");
		let b = await getLocation(newstr2);
		let endAddr = b[0].Location.Address.Label;
		let end = [
			b[0].Location.DisplayPosition.Longitude,
			b[0].Location.DisplayPosition.Latitude,
		];
		console.log(a);
		postEvent(str3, "Test Host", startAddr, endAddr, start, end, str4);
		console.log(start, end);
	}

	modalTrigger() {
		const form = (
			<Form>
				            
				<ModalWrapper
					buttonTriggerText="Create New Event"
					modalHeading="New Event"
					modalLabel="Creation"
					handleSubmit={this.stringChange}
				>
					            
					<FormGroup>
						              
						<TextInput
							helperText="Starting Street Address and City"
							id="test2"
							invalidText="Invalid error message."
							labelText="Starting Address"
							placeholder="Starting Address Here"
							onChange={this.changeAddressField}
						/>
						                           
						<TextInput
							helperText="Ending Street Address and City"
							id="test2"
							invalidText="Invalid error message."
							labelText="Ending Address"
							placeholder="Ending Address Here"
							onChange={this.changeAddressField2}
						/>
						                       
						<TextInput
							helperText="Protest Name"
							id="test2"
							invalidText="Invalid error message."
							labelText="Protest Name"
							placeholder="Protest Name Here"
							onChange={this.changeName}
						/>
						  
						<TextArea
							cols={50}
							helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
							id="test5"
							invalidText="Invalid error message."
							labelText="Description"
							placeholder="Enter any extra information about the protest here."
							rows={4}
						/>
						<TextInput
							helperText="Schedule Date and Time"
							id="test2"
							invalidText="Invalid error message."
							labelText="Date and Time"
							placeholder="January, 01, 2020 00:00:00"
							onChange={this.changeDate}
						/>
						              
					</FormGroup>
					            
				</ModalWrapper>
				                                    
			</Form>
		);

		return form;
	}

	render() {
		return (
				<div className="modal-trigger-container">
					{this.modalTrigger()}
				</div>
		);
	}
}
