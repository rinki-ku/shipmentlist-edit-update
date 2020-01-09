import React, { Component } from 'react';
import Table from '../../molecules/table';
import httpClient from '../../../lib/httpClient/httpClient';
import Error from '../../atoms/error';
import Loader from '../../atoms/dotLoader';
import constants from '../../../constants';
import config from '../../../config';
import './style.css';
import Input from '../../atoms/input';

class Shipment extends Component {
  state = {
    error: null,
    errorInfo: null,
    isLoader: false,
    shipmentResults: null,
    searchedShipmentResults: null
  };

  componentWillMount() {
    this._getData();
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  _getData = async () => {
    this.setState({
      isLoader: true,
    });
    try {
      const response = await httpClient.get(
        config.externalServices.shipmentUrl,
      );
      this.setState({
        isLoader: false,
        shipmentResults: response,
        searchedShipmentResults: response
      });
    } catch (error) {
      this.setState({
        isLoader: false,
      });
      throw new Error(error.message);
    }
  };

  _handleEditClick = id => {
    const selectedShipment = this.state.shipmentResults.filter(
      shipmentResult => shipmentResult.id === id,
    );
    this.props.history.push({
      pathname: '/shipmentDetails',
      state: selectedShipment,
    });
  };

  _handleChange = e => {
    const { value: shipmentId } = e.target;
    if(!shipmentId){
      this.setState({
        shipmentResults: this.state.shipmentResults
      })
      return;
    }
    const searchedShipmentDetail = this.state.shipmentResults.filter(
      ({ id }) => id.toLowerCase().indexOf(shipmentId.toLowerCase()) > -1,
      );
    this.setState({
      searchedShipmentResults: searchedShipmentDetail,
    });
  };

  render() {
    const { errorInfo, isLoader, searchedShipmentResults } = this.state;
    return (
      <>
        {errorInfo ? (
          <Error errorText={errorInfo} />
        ) : isLoader ? (
          <Loader />
        ) : (
          <div className="shipment-results-wrapper">
            <Input handleChange={this._handleChange} type="search" placeholder={constants.placeHolderText.searchPlaceHolderText}/>
            <Table
              data={searchedShipmentResults}
              columns={constants.shipmentColumnHeaders}
              defaultPageSize={20}
              handleEditClick={this._handleEditClick}
            />
          </div>
        )}
      </>
    );
  }
}

export default Shipment;
