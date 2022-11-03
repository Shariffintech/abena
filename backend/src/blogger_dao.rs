// database layer

pub const TABLE: &Str = "blogger";
const SELECT_FIELDS: &str = "id, name";


// fetches all bloggers
pub async fn fetch(db_pool: &DBPool) -> Result<Vec<Blogger>>{
    let con = get_db_con(db_pool).await?;
    let query = format!("Select {} From {}", SELECT_FIELDS, TABLE);
    let rows = con.query(query.as_str(), &[]).await.map_err(DBQueryError)?;
    Ok(rows.iter().map(|row| row_to_blogger(&row).collect()));
}

// fetches the blogger with a given ID
pub async fn fetch_one(db_pool: &DBPool, id: i32) -> Result<Vec<Blogger>>{

    let con = get_db_con(db_pool).await?;
    let query = format!("Select {} From {} Where id= $1", SELECT_FIELDS, TABLE);
    let rows = con.query_one(query.as_str(), &[&id]).await.map_err(DBQueryError)?;
    Ok(row_to_blogger(&row))
}


// creates a new blogger
pub async fn create(db_pool: &DBPool, body:BloggerRequest) -> Result<Blogger>{
    let con = get_db_con(db_pool).await?;
    let query = format!("INSERT INTO {} (name) VALUES ($1) RETURNING *", TABLE);
    let rows = con.query_one(query.as_str(), &[&body.name]).await.map_err(DBQueryError)?;
    Ok(row_to_blogger(&row))
}

//  convert the returned database row data to an actual Blogger struct.
fn row_to_blogger(row: &Row){
    let id: i32 = row.get(0);
    let name: String = row.get(1);
     Blogger {id, name}
}
