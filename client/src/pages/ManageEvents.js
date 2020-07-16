import React from 'react';
import { DisplayMapClass } from '../components/DisplayMapClass';
import getLocation from '../utils/getLocation';
import { postEvent } from '../utils/postEvent';
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
} from 'carbon-components-react';

export class ManageEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addressField: '', addressField2: '' };
    this.changeAddressField = this.changeAddressField.bind(this);
    this.stringChange = this.stringChange.bind(this);
    this.changeAddressField2 = this.changeAddressField2.bind(this);
  }
  changeAddressField(event) {
    console.log(this.state);
    this.setState({ addressField: event.target.value });
  }
  changeAddressField2(event) {
    console.log(this.state);
    this.setState({ addressField2: event.target.value });
  }
  async stringChange() {
    let str = this.state.addressField;
    let newstr = str.replace(/\s/g, '+');
    let a = await getLocation(newstr);
    let start = [
      a[0].Location.DisplayPosition.Longitude,
      a[0].Location.DisplayPosition.Latitude,
    ];

    let str2 = this.state.addressField2;
    let newstr2 = str2.replace(/\s/g, '+');
    let b = await getLocation(newstr2);
    let end = [
      b[0].Location.DisplayPosition.Longitude,
      b[0].Location.DisplayPosition.Latitude,
    ];
	postEvent("Test Event", "Test Host", start, end, 'July 16, 2020 14:00:00');
    console.log(start, end);
  }

  render() {
    return (
      <div className='page-content'>
        <Form>
                      
          <ModalWrapper
            buttonTriggerText='Create New Event'
            modalHeading='New Event'
            modalLabel='Creation'
            handleSubmit={this.stringChange}
          >
                        
            <FormGroup>
                            
              <TextInput
                helperText='Starting Street Address and City'
                id='test2'
                invalidText='Invalid error message.'
                labelText='Starting Address'
                placeholder='Starting Address Here'
                onChange={this.changeAddressField}
              />
                          
            </FormGroup>
            <FormGroup>
                            
              <TextInput
                helperText='Ending Street Address and City'
                id='test2'
                invalidText='Invalid error message.'
                labelText='Ending Address'
                placeholder='Ending Address Here'
                onChange={this.changeAddressField2}
              />
                          
            </FormGroup>
                        
            <FormGroup>
                          
              <TextArea
                cols={50}
                helperText='Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)'
                id='test5'
                invalidText='Invalid error message.'
                labelText='Description'
                placeholder='Enter any extra information about the protest here.'
                rows={4}
              />
                          
            </FormGroup>
                        
          </ModalWrapper>
                                              
        </Form>
                                                                
      </div>
    );
  }
}
