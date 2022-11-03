mod db;
mod handler;
mod error;

type Result<T> = std::result::Result<T, Rejection>;
type DBCon = Connection<PgConnectionManager<NoTls>>;
type DBPool = Pool<PgConnectionManager<NoTls>>;

#[tokio::main]
async fn main() {
    let db_pool = db::create_pool().expect("database pool can be created");

    db::init_db(&db_pool)
        .await
        .expect("database can now be initialized");

}

