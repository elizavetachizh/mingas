const Sequelize = require('sequelize')
const sequelize = require('../database')

const client = sequelize.define('clients',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    connection_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    modified_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    address_house_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_surname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    organization: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    personal_number: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    personal_number_short: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    client_individual_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_region: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_10: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_11: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_12: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_13: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_14: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_15: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_16: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_5: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_6: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_7: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_8: {
        type: Sequelize.STRING,
        allowNull: true
    },
    property_9: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_district: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_inn: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_room: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_corps: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_apartment: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    client_firstname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_street: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_lastname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_postcode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    account_objects_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    work_timetable: {
        type: Sequelize.STRING,
        allowNull: true
    },
    disconnect_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    address_additional: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    is_closed: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    cadastral_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cadastral_number2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    counterparty_individual: {
        type: Sequelize.STRING,
        allowNull: true
    },
    counterparty_maintence_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_kpp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_fullname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_locality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    management_company_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = client
