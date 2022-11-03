// database layer

type Result<T> = std::result::Result::<T,error::Error>;

const DB_POOL_MAX_OPEN: u64 = 32;
const DB_POOL_MAX_IDLE: u64 = 8;
const DB_POOL_TIMEOUT_SECONDS: u64 = 15;
const INIT_SQL: &str = "./db.sql";


// reading the db.sql file and execute it to initialize our tables
pub async fn init_db(db_pool: &DB_POOL) -> Result<()>{
    let init_file = fs::read_to_string(INIT_SQL)?;
    let con = get_db_con(db_pool).await?;
    con.batch_execute(init_file.as_str())
        .await
        .map_err(DBInitiatorError);
    Ok(())
}

// get a new connection from the pool
pub async fn get_db_con(db_pool: &DB_POOL) -> Result<DB_Con>{
    db_pool.get().await.map_err(DBPoolError)
}

//  initialize the database pool
pub fn create_pool() -> std::Result<DBPool, mobc::Error<Error>>{
    let config = Config::from_string("postgres://postgres@127.0.0.1:7878/postgres")?;

    let manager = PgConnectionManager::new(config, NoTls);

    Ok(Pool::builder()
        .max_open(DB_POOL_MAX_OPEN)
        .max_idle(DB_POOL_MAX_IDLE)
        .get_timeout(Some(Duration::from_secs(DB_POOL_TIMEOUT_SECONDS)))
        .build(manager)
    )


}



