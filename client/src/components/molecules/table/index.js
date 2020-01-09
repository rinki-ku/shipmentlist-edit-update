import React from 'react';
import ReactTable from 'react-table';
import config from '../../../config';
import 'react-table/react-table.css';


const table = props => {
  const {
    data,
    columns,
    pivotBy,
    defaultPageSize = config.defaultPageSize,
    handleEditClick,
  } = props;
  return (
    <>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        className={`-striped -highlight`}
        filterable
        pivotBy={pivotBy}
        getTdProps= {(state, rowInfo, column, instance) => {
            return {
                onClick: (e, handleOriginal) => {
                    if(handleOriginal){
                        handleOriginal()
                    }
                    // edit click on each record 
                    if(column.id === "EditShipment"){
                        handleEditClick(rowInfo.row.id)
                    }else{
                        return null
                    }
                }
            }
        }}
      />
    </>
  );
};

export default table;
