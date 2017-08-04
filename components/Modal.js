import React, { Component } from 'react';

class Modal extends React.Component {

  render() {

    return (
      <div id="myModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Add Event</h4>
            </div>
            <div className="modal-body">
              <form className="form-inline">
                <label className="mr-sm-2">Start Time </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="start-time">
                  <option value="Choose...">Choose...</option>
                  <option value="1">12:00 AM</option>
                  <option value="2">1:00 AM</option>
                  <option value="3">2:00 AM</option>
                  <option value="3">3:00 AM</option>
                  <option value="3">4:00 AM</option>
                  <option value="3">5:00 AM</option>
                  <option value="3">6:00 AM</option>
                  <option value="3">7:00 AM</option>
                  <option value="3">8:00 AM</option>
                  <option value="3">9:00 AM</option>
                  <option value="3">10:00 AM</option>
                  <option value="3">11:00 AM</option>
                  <option value="1">12:00 PM</option>
                  <option value="2">1:00 PM</option>
                  <option value="3">2:00 PM</option>
                  <option value="3">3:00 PM</option>
                  <option value="3">4:00 PM</option>
                  <option value="3">5:00 PM</option>
                  <option value="3">6:00 PM</option>
                  <option value="3">7:00 PM</option>
                  <option value="3">8:00 PM</option>
                  <option value="3">9:00 PM</option>
                  <option value="3">10:00 PM</option>
                  <option value="3">11:00 PM</option>
                </select>
                <label className="mr-sm-2">End Time </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="end-time">
                  <option value="Choose...">Choose...</option>
                  <option value="1">12:00 AM</option>
                  <option value="2">1:00 AM</option>
                  <option value="3">2:00 AM</option>
                  <option value="3">3:00 AM</option>
                  <option value="3">4:00 AM</option>
                  <option value="3">5:00 AM</option>
                  <option value="3">6:00 AM</option>
                  <option value="3">7:00 AM</option>
                  <option value="3">8:00 AM</option>
                  <option value="3">9:00 AM</option>
                  <option value="3">10:00 AM</option>
                  <option value="3">11:00 AM</option>
                  <option value="1">12:00 PM</option>
                  <option value="2">1:00 PM</option>
                  <option value="3">2:00 PM</option>
                  <option value="3">3:00 PM</option>
                  <option value="3">4:00 PM</option>
                  <option value="3">5:00 PM</option>
                  <option value="3">6:00 PM</option>
                  <option value="3">7:00 PM</option>
                  <option value="3">8:00 PM</option>
                  <option value="3">9:00 PM</option>
                  <option value="3">10:00 PM</option>
                  <option value="3">11:00 PM</option>
                </select>
              </form>
              <form>
                <div className="form-group">
                  <label>Event Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Event Title"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.newEvent} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
