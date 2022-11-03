// database layer

pub const TABLE: &str = "BlogPost";
const SELECT_FIELDS: &str = "id, blogger_id, title , body";


// fetches all blog post
pub async fn fetch( db_pool:&DBPool, blogger_id: i32){
    let con = get_db_con(db_pool).await?;
    let query = format!("Select {} From {}", TABLE)?;
    let rows = con.query(query.as_str(),&[&body.id, &body.title]).await.map_err(DBQueryError)?;
    Ok(rows.iter().map(|r| row_to_blogpost(&r)).collect()
    )

}

// fetches all blog post with a given ID

pub async fn fetch_one(db_pool: &DBPool, id: i32) -> Result<Vec<BlogPost>, DBQueryError> {
    let con = get_db_con(db_pool).await?;
    let query = format!("Select {} From {} Where id= $1", SELECT_FIELDS, TABLE);
    let row = con.query(query.as_str(), &[&id]).await.map_err(DBQueryError)?;
    Ok(row_to_blogpost(&row))
}

// creates a new blog post
pub async fn create(db_pool: &DBPool, body:BlogPost) -> Result<BlogPost> {
    let con = get_db_con(db_pool).await?;
    let query = format!("INSERT INTO {} (name) VALUES ($1) RETURNING *", TABLE);
    let rows = con.query_one(query.as_str(), &[&body.title, &body.description]).await.map_err(DBQueryError)?;
    Ok(row_to_blogpost(&row))
}

// delete a blogpost
pub async fn delete(db_pool: &DBPool, blogger_id: i32, id: i32) -> Result<u64> {
    let con = get_db_con(db_pool).await?;
    let query = format!("DELETE FROM {} WHERE id = $1 AND blogger_id = $2", TABLE);
    con.execute(query.as_str(), &[&id, &blogger_id])
        .await
        .map_err(DBQueryError)
}

//  convert the returned database row data to an actual Blogpost struct.
fn row_to_blogpost(row: &Row){
    let id: i32 = row.get(0);
    let title: String = row.get(1);
    let description: String = row.get(2);
    BlogPost {id, title, description};

    BlogPost{
        id,
        title,
        description
    }
}