const Sequelize = require('sequelize')
const sequelize = require('../database')

const client_orders = sequelize.define('client_orders', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    closing_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    control_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    departure_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    modified_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    message_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    organization: {
        type: Sequelize.STRING,
        allowNull: true
    },
    subobj: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true
    },
    object: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_manager: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_worker: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_responsible: {
        type: Sequelize.STRING,
        allowNull: true
    },
    operation_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_reason: {
        type: Sequelize.STRING,
        allowNull: true
    },
    type_doc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    order_mark: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    order_sum: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    completion_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    arrival_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    who_called: {
        type: Sequelize.STRING,
        allowNull: true
    },
    work_description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    brigade: {
        type: Sequelize.STRING,
        allowNull: true
    },
    outside_org_compl: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false 
    },
    order_worker2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    object_height: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    address_city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    doc_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    start_datetime: {
        type: Sequelize.DATE,
        allowNull: true
    },
    end_datetime: {
        type: Sequelize.DATE,
        allowNull: true
    },
    contract_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_house_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_apartment: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    address_corps: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_locality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    doc_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bso_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    moved_to_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    department: {
        type: Sequelize.STRING,
        allowNull: true
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false 
    },
    last_visit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    offered: {
        type: Sequelize.STRING,
        allowNull: true
    },
    _conduct: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false 
    },
    address_district: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_region: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    payment_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_street: {
        type: Sequelize.STRING,
        allowNull: true
    },
    payment_form: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = client_orders