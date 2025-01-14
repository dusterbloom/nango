const SYNCS_TABLE = '_nango_syncs';

exports.up = async function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(SYNCS_TABLE, function (table) {
        table.dateTime('last_sync_date').nullable();
    });
};

exports.down = async function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(SYNCS_TABLE, function (table) {
        table.dropColumn('last_sync_date');
    });
};
