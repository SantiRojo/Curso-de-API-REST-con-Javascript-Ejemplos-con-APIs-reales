window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
  console.log({ location });

  if (location.hash.startsWith('#trends')) {

    trendsPage();

  } else if (location.hash.startsWith('#search=')) {

    searchPage();

  } else if (location.hash.startsWith('#movie=')) {

    movieDetailsPage();

  } else if (location.hash.startsWith('#category=')) {

    categoriesPage();

  } else {

    homePage();

  }

  location.hash;
}

function homePage() {
  console.log('Estas en home!');

  getTrendingMoviesPreview();
  getCategoriesPreview();
};

function categoriesPage() {
  console.log('Estas en categories!');
};

function movieDetailsPage() {
  console.log('Estas en movies!');

};

function searchPage() {
  console.log('Estas en search!')
};

function trendsPage() {
  console.log('Estas en trends!')
};