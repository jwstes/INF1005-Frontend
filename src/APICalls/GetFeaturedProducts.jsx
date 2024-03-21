import React, { useEffect } from 'react';

const GetFeaturedProducts = () => {
  useEffect(() => {
    fetch('http://35.212.170.89:5000/api/product/read.php')
      .then(response => response.json())
      .then(
        data => {
            var watches = data['data'];
            var unprocessedTopList = [];
            watches.forEach(watch => {
                unprocessedTopList.push([watch['id'], watch['sold']]);
            });
            unprocessedTopList.sort(function(a,b){
                return a[1] - b[1];
            });
            unprocessedTopList.reverse();

            var featuredProductsGrid = document.getElementById('featuredProductsGrid');
            var featuredProductsGridHTML = ``;

            for (let i = 0; i < 6; i++) {
                var productID = unprocessedTopList[i][0];
                for (let j = 0; j < watches.length; j++) {
                    if(watches[j]['id'] == productID){
                        featuredProductsGridHTML += `<div class="col">`;
                        featuredProductsGridHTML += `<div class="card" style="width: 18rem">`;
                        featuredProductsGridHTML += `<img src="http://35.212.170.89/images/${watches[j]['images']['img1']}" class="card-img-top"></img>`;
                        featuredProductsGridHTML += `<div class="card-body">`;
                        featuredProductsGridHTML += `<h5 class="card-title">${watches[j]['name']}</h5>`;
                        featuredProductsGridHTML += `<p class="card-text">${watches[j]['description']}</p>`;
                        featuredProductsGridHTML += `<p class="card-text">$${watches[j]['price']}</p>`;
                        featuredProductsGridHTML += `<a href="/viewProduct?id=${watches[j]['id']}" class="btn btn-primary">View Product</a>`;
                        featuredProductsGridHTML += `</div>`;
                        featuredProductsGridHTML += `</div>`;
                        featuredProductsGridHTML += `</div>`;
                    }
                }
            }

            featuredProductsGrid.innerHTML = featuredProductsGridHTML;
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return null;
};

export default GetFeaturedProducts;
