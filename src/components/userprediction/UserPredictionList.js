import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import './UserPrediction.css'



export default class ApplicationViews extends Component {

    

    render() {
            
        

        return (
<wrapper id="predictionListWrapper">
<Table id="predictionTable">
        <thead>
          <tr id="predHead">
            <th class="predictionHeader">Placement</th>
            <th></th>
            <th class="predictionHeader">Cast Members</th>
            <th class="predictionHeader">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td>
            <FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup>
</td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          <tr>
            <th scope="row">20</th>
            <td></td>
            <td><FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup></td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
          
        </tbody>
      </Table>




    
    </wrapper>


        )
}
}