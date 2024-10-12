const createItem = ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
  return `<li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
  <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
  </a>
  <ul class="gallery-interactions-block">
  <li class="gallery-interactions-item"><span class="gallery-interactions-activity">Likes</span><span class="gallery-activity-quantity">${likes}</span></li>
  <li class="gallery-interactions-item"><span class="gallery-interactions-activity">Views</span><span class="gallery-activity-quantity">${views}</span></li>
  <li class="gallery-interactions-item"><span class="gallery-interactions-activity">Comments</span><span class="gallery-activity-quantity">${comments}</span></li>
  <li class="gallery-interactions-item"><span class="gallery-interactions-activity">Downloads</span><span class="gallery-activity-quantity">${downloads}</span></li>
  </ul>
  </li>`;
};

export { createItem };
