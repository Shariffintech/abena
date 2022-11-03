//API Surface level --
// handlers to pull operations from the corresponding dao's
// convert the returned blogger || blogpost into a BlogpostResponse || BloggerResponse
// returning any errors into the callers

pub async fn list_blogpost_handler(blogger_id: i32, db_pool: DBPool) -> Result<impl Reply> {
    let blogpost = db::blogpost_dao::fetch(&db_pool, blogger_id)
        .await
        .map_err(reject::custom)?;
    Ok(json::<Vec<_>>(
        &blogpost.into_iter().map(BlogPostResponse::of).collect(),
    ))
}

pub async fn create_blogpost_handler(
    blogger_id: i32,
    description: BlogPostRequest,
    db_pool: DBPool
) -> Result <impl Reply>{
    Ok(json(&BlogPostResponse::of(
        db::blogpost_dao::create(&db_pool, blogger_id, description)
            .await
            .map_err(reject::custom)?,
    )))

}

pub async fn delete_blogpost_handler( blogger_id: i32, db_pool: DBPool) -> Result<impl Reply> {
    db::blogpost_dao::delete(&db_pool, blogger_id, id)
        .await
        .map_err(reject::custom)?;
    Ok(StatusCode::OK)

}

pub async fn list_blogger_handler(db_pool: DBPool)-> Result<impl Reply> {
    let bloggers = db::blogger_dao::fetch(&db_pool).await.map_err(reject::custom)?;
    Ok(json::<Vec<_>>(
        &bloggers.into_iter().map(OwnerResponse::of).collect(),
    ))
}

pub async fn fetch_blogger_handler(id: i32, db_pool: DBPool) -> Result<impl Reply>{
let blogger = db::blogger_dao::fetch_one(db_pool, id).await.map_err(reject::custom)?;
    Ok(json(&BloggerResponse::of(blogger)))
}

pub async fn create_blogger_handler(body:BloggerRequest, db_pool: DBPool) -> Result<impl Reply>{
Ok(json(&BloggerResponse::of(
    db::blogger_dao::create(&db_pool, body)
        .await.map_err(reject::custom)?,
)))
}