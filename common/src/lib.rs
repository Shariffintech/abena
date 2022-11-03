// database layer
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Clone, PartialEq, Debug)]
pub struct Blogger {
    pub id: i32,
    pub name: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, Debug)]
pub struct BloggerRequest {
    pub name: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, Debug)]
pub struct BloggerResponse {
    pub id: i32,
    pub name: String,
}

impl BloggerResponse {
    pub fn of(blogger: Blogger) -> BloggerResponse {
        BloggerResponse {
            id: blogger.id,
            name: blogger.name,
        }
    }
}

#[derive(Deserialize, Clone, PartialEq, Debug)]
pub struct BlogPost {
    pub id: i32,
    pub title: String,
    pub blogger_id: i32,
    pub description: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, Debug)]
pub struct BlogPostRequest {
    pub title: String,
    pub blogger_id: i32,
    pub description: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, Debug)]
pub struct BlogPostResponse {
    pub id: i32,
    pub title: String,
    pub blogger_id: i32,
    pub description: String,
}

impl BlogPostResponse {
    pub fn of(blogpost: BlogPost) -> BlogPostResponse {
        BlogPostResponse {
            id: blogpost.id,
            title: blogpost.title,
            blogger_id: blogpost.blogger_id,
            description: blogpost.description,
        }
    }
}