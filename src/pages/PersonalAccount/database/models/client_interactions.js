const Sequelize = require('sequelize')
const sequelize = require('../database')

const client_interactions = sequelize.define('client_interactions', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    completion_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    control_date: {
        type: Sequelize.DATE,
        allowNull: true
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
    manager: {
        type: Sequelize.STRING,
        allowNull: true
    },
    doc_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_kind: {
        type: Sequelize.STRING,
        allowNull: true
    },
    client_representative: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_comment: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    interaction_result: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_body: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    interaction_sum: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    interaction_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    outside_org_compl: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    doc_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    interaction_worker1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_worker2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_worker3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    annex_count: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: true
    },
    counterparty_GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interaction_number2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ts_customer: {
        type: Sequelize.STRING,
        allowNull: true
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    },
    start_date_proposed: {
        type: Sequelize.DATE,
        allowNull: true
    },
    end_date_proposed: {
        type: Sequelize.DATE,
        allowNull: true
    },
    refusal_desc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GUID: {
        type: Sequelize.STRING,
        allowNull: true
    },
    management_company: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
        allowNull: false
    }
});

module.exports = client_interactions