import React from 'react';
import { Link } from 'react-router-dom';

export default {
  shipmentColumnHeaders: [
    {
      Header: 'ID',
      accessor: 'id',
      headerClassName: 'wordwrap',
      filterable: false,
    },
    {
      Header: 'Name',
      accessor: 'name',
      headerClassName: 'wordwrap',
      filterable: false,
    },
    {
      Header: 'Mode',
      accessor: 'mode',
      headerClassName: 'wordwrap',
      filterable: false,
    },
    {
      Header: 'Edit',
      id: 'EditShipment',
      filterable: false,
      Cell: () => <Link to='/supplierDetails'><button className='editBtn'>Edit</button></Link>,
      headerClassName: 'wordwrap',
    },
  ],
  placeHolderText: {
    searchPlaceHolderText: 'Search for shipment id'
  },
  labelText: {
    name: 'Name',
    id: 'Id',
    cargo: {
      type: 'Type',
      description: 'Description',
      volume: 'Volume'
    },
    mode: 'Mode',
    type: 'Type',
    destination: 'Destination',
    origin: 'Origin',
    services: {
      type: 'Type'
    },
    total: 'Total',
    status: 'Status',
    userId: 'User Id'
  }
};
