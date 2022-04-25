const Sequelize = require('sequelize')
const sequelize = require('../database')

const client_equipments = sequelize.define('client_equipments', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    manufacture_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    disconnect_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    record_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    install_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    modified_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    container: {
        type: Sequelize.STRING,
        allowNull: true
    },
    equipment_first: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mark: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true
    },
    install_place: {
        type: Sequelize.STRING,
        allowNull: true
    },
    install_place_add: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tempopary_disabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    tempopary_disabled_desc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    equipment_node: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    equipment_grs: {
        type: Sequelize.STRING,
        allowNull: true
    },
    correction_factor_agreed: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    in_work_hours: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    quantity_max: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    quantity_today: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    pressure_unit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    power: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    serial_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category_code: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    container_technology: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    correction_factor: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    correction_factor_time: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    account_object_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    diameter: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    daily_data_transf: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    measuring_tool: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GUID: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = client_equipments