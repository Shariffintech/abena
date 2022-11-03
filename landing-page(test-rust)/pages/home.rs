use yew::prelude::*;


struct Apparel {
    name: String,
    description: String,
    image: String,
    price: f64,
}

struct State {
    apparel: Vec<Apparel>,
}

pub struct Home {
    state: State,
}

impl Component for Home {
    type Message = ();
    type Properties = ();

    // The create lifecycle method is invoked when the component is created and this is where we set the initial state.
    // For the time being, we’ve created a mock list of products and assigned it to the products inside the state as
    // initial value. Later, we’ll fetch this list using network request.


    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        let apparel: Vec<Apparel> = vec![
            Apparel {
                id: 1,
                name: "Abena DMS Classic Shirt".to_string(),
                description: "An apple a day keeps the doctor at away".to_string(),
                image: "/apparel/fruit1.jpg".to_string(),
                price: 23.65,
            },
            Apparel {
                id: 2,
                name: "Abena DMS Classic Hoodie".to_string(),
                description: "An apple a day keeps the doctor at away".to_string(),
                image: "/apparel/fruit2.jpg".to_string(),
                price: 53.65,
            },
        ];
        Self {
            state: State {
                apparel: (),
            },
        }
    }


    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        let products: Vec<Html> = self
            .state
            .products
            .iter()
            .map(|product: &Product| {
                html! {
                  <div>
                    <img src={&product.image}/>
                    <div>{&product.name}</div>
                    <div>{"$"}{&product.price}</div>
                 </div>
                }
            })
            .collect();
        html! { <span>{"Home!"}</span> }
    }
}