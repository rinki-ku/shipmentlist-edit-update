import React, { Fragment } from 'react';
import './style.css';
import Input from '../../atoms/input';
import Label from '../../atoms/label';
import constants from '../../../constants';

const detailsList = props => {
  const {
    detail: {
      id,
      name,
      cargo,
      mode,
      type,
      destination,
      origin,
      services,
      total,
      status,
      userId,
    },
    handleSubmit,
  } = props;
  const {
    labelText: {
      name: Name,
      id: Id,
      cargo: {
        type: cargoType,
        description: cargoDescription,
        volume: cargoVolume,
      },
      mode: Mode,
      type: Type,
      destination: Destination,
      origin: Origin,
      services: { type: serviceType },
      total: Total,
      status: Status,
      userId: UserId,
    },
  } = constants;
  return (
    <>
      <div className="input-container">
        <Label text={Name} />
        <Input type="text" value={name} />
      </div>
      <h1>More Info</h1>
      <ul className='outer-list'>
        <li>
          <Label text={Id} />
          <p>{id}</p>
        </li>
        <p>Cargo</p>
        {cargo.map(({ type, description, volume }, index) => (
          <ul key={index} className='inner-list'>
            <li>
              <Label text={cargoType} />
              <p>{type}</p>
            </li>
            <li>
              <Label text={cargoDescription} />
              <p>{description}</p>
            </li>
            <li>
              <Label text={cargoVolume} />
              <p>{volume}</p>
            </li>
          </ul>
        ))}
        <li>
          <Label text={Mode} />
          <p>{mode}</p>
        </li>
        <li>
          <Label text={Type} />
          <p>{type}</p>
        </li>
        <li>
          <Label text={Destination} />
          <p>{destination}</p>
        </li>
        <li>
          <Label text={Origin} />
          <p>{origin}</p>
        </li>
        {services.map(({ type }, index) => (
          <ul>
            <li>
            <Label text={serviceType} />
            <p key={index}>{type}</p>
            </li>
          </ul>
        ))}
        <li>
          <Label text={Total} />
          <p>{total}</p>
        </li>
        <li>
          <Label text={Status} />
          <p>{status}</p>
        </li>
        <li>
          <Label text={UserId} />
          <p>{userId}</p>
        </li>
      </ul>
      <button
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          handleSubmit(id);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default detailsList;
