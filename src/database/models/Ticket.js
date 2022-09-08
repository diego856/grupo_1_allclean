module.exports = (sequelize, dataTypes) => {
    let alias = 'Tickets';
    let cols = {
        Tick_numero: {
            type: dataTypes.INTEGER,
            primaryKey: true,            
            allowNull: false } ,
       Tick_cerradox: {
            type: dataTypes.STRING(20),
            allowNull: true},
       Tick_fecha: {
            type: dataTypes.DATE,
            allowNull: true},
       Tick_cerradox: {
            type: dataTypes.STRING(20),
            allowNull: true}	,
       Tick_FECHACIERRE: {
            type: dataTypes.DATE,
            allowNull: true}	,
       Tick_HORACIERRE: {
            type: dataTypes.STRING(10),
            allowNull: true}	,
       Tick_HORA: {
            type: dataTypes.DATE,
            allowNull: true},
        Tick_TITULO: {
            type: dataTypes.STRING(250),
            allowNull: true},
       TICK_ESTADO: {
            type: dataTypes.STRING(1),
            allowNull: true}
    };
    let config = {
        tableName: "Tickets",
        timestamps: false,
        deletedAt: false
    }
    const Ticket = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
   
    return Ticket
};