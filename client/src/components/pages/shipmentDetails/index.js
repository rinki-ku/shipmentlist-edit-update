import React, { Component } from 'react';
import DetailsList from '../../molecules/detailsList';
import httpClient from '../../../lib/httpClient/httpClient';
import config from '../../../config';
import './style.css'

class ShipmentDetails extends Component {
  state = {
    selectedShipmentDetails: this.props.history.location.state,
    isShipmentDetailsSubmitted: false,
    isLoader: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  _handleChange = e => {
    let updatedSelectedShipmentDetails = this.state.selectedShipmentDetails.map(
      selectedShipmentDetail => (selectedShipmentDetail.name = e.target.value),
    );
    this.setState({
      selectedShipmentDetail: updatedSelectedShipmentDetails,
    });
  };

  _handleSubmit = async id => {
    try {
      const response = await httpClient.put(
        `${config.externalServices.shipmentUrl}/${id}`,
        this.state.selectedShipmentDetails[0],
      );
      let updatedSelectedShipmentDetails = this.state.selectedShipmentDetails.map(
        selectedShipmentDetail => ({ ...selectedShipmentDetail, ...response }),
      );
      this.setState({
        selectedShipmentDetails: updatedSelectedShipmentDetails,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  render() {
    const { selectedShipmentDetails } = this.state;
    return (
      <form onChange={this._handleChange}>
        {selectedShipmentDetails.length > 0 &&
          selectedShipmentDetails.map((selectedShipmentDetail, index) => {
            return (
              <div className='shipment-details-wrapper'>
                <DetailsList
                  key={index}
                  detail={selectedShipmentDetail}
                  handleChange={this._handleChange}
                  handleSubmit={this._handleSubmit}
                />
              </div>
            );
          })}
      </form>
    );
  }
}

export default ShipmentDetails;
