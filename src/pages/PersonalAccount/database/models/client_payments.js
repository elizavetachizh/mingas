const Sequelize = require('sequelize')
const sequelize = require('../database')

const client_payments =sequelize.define('client_payments', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    modified_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    organization: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    equipment_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    service: {
        type: Sequelize.STRING,
        allowNull: true
    },
    privilege: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    late_payment_penalty: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    payment_sum: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    move_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    calculation_type: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    coefficient: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    recalculation: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    period: {
        type: Sequelize.DATE,
        allowNull: true
    },
    doc_reg: {
        type: Sequelize.STRING,
        allowNull: true
    },
    payment_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    payment_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}); 

module.exports = client_payments