const Sequelize = require('sequelize')
const sequelize = require('../database')

const client_meters = sequelize.define('client_meters', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    barometric_pressure: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    modified_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    pressure_constant: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    pressure: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    consumption_additional: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    organization: {
        type: Sequelize.STRING,
        allowNull: true 
    },
    client_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    method_inf: {
        type: Sequelize.STRING,
        allowNull: true
    },
    equipment_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    correction_factor: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    correction_factor2: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    meter_value: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    meter_consumption: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    meter_consumption_r: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    doc_date: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = client_meters