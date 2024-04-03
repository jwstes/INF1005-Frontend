import { useState, useEffect } from 'react'
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductGrid() {
    let [searchParams] = useSearchParams();
    const categoryNM = searchParams.get('nm');
    
    const [
        categoryName,
        setCategoryName
    ] = useState([]);

    useEffect(() => {
        fetch(`https://35.212.170.89/api/product/read.php`)
        .then(response => response.json())
        .then(data => {
            var displayCategoryName = "";
            if(categoryNM == 'retail'){
                displayCategoryName = "Retail";
                setCategoryName(displayCategoryName);
            }
            else if(categoryNM == 'ltd'){
                displayCategoryName = "Limited";
                setCategoryName(displayCategoryName);
            }


            var productsGrid = document.getElementById('productsGrid');
            var productsGridHTML = ``;

            var watches = data['data'];
            for (let j = 0; j < watches.length; j++) {
                if(watches[j]['category_name'] == displayCategoryName){

                    
                    productsGridHTML += `<div class="col">`;
                    productsGridHTML += `<div class="card" style="width: 18rem">`;
                    productsGridHTML += `<div class="cardImageContainer">`
                    productsGridHTML += `<img src="http://35.212.170.89/images/${watches[j]['images']['img1']}" class="card-img-top" alt="rolex"></img>`;
                    productsGridHTML += `</div>`
                    productsGridHTML += `<div class="card-body">`;
                    productsGridHTML += `<h2 class="card-title">${watches[j]['name']}</h2>`;
                    productsGridHTML += `<p class="card-text">${watches[j]['description']}</p>`;
                    productsGridHTML += `<p class="card-text">$${watches[j]['price']}</p>`;
                    productsGridHTML += `<a href="/viewProduct?id=${watches[j]['id']}" class="btn btn-primary">View Product</a>`;
                    productsGridHTML += `</div>`;
                    productsGridHTML += `</div>`;
                    productsGridHTML += `</div>`;
                }
            }
            productsGrid.innerHTML = productsGridHTML;

            
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [categoryNM]);

  return (
    <main id = "main content">
        <header>
            <div className="container-fluid featuredProducts">
                <div className="textCenter">
                    <h1>Displaying Products for {categoryName}</h1>
                </div>
            </div>
        </header>
        <div className="container-fluid featuredProducts">
            <div className="productsGrid" id="productsGrid">
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual DateJust Superlative Chronometer Officially Certified">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 1</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.watchpalace.com.sg/wp-content/uploads/watch-assets-front-facing/landscape_assets/m228238-0061_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual day-date">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 2</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.cortinawatch.com/wp-content/themes/Cortina-revamp/rolex-bespoke-2020/images/model/watch_assets_front_facing/dekstop/m126500ln-0002_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual DateJust Superlative Chronometer Officially Certified Daytona">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 3</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126710blro-0001_modelpage_front_facing_landscape_4-14-2023.png" className="card-img-top" alt="Rolex Oyster Perpetual Date GMT-Master II Superlative Chronometer Officially Certified">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 4</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126610lv-0002_modelpage_front_facing_landscape_4-14-2023.png" className="card-img-top" alt="Rolex Oyster Perpetual Date Submariner">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 5</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://johnsonsjewellers.co.uk/media/catalog/product/cache/cbd73977aee009ed4e34488c25679644/m/1/m126719blro-0002_modelpage_front_facing_landscape_1.webp" className="card-img-top" alt="Rolex Oyster Perpetual Date GMT-Master II Superlative Chronometer Officially Certified">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 6</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProductGrid
