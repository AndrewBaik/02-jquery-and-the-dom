'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE
// constructor function starts with a capitalized letter, we that we can automate the publishing articles that are in an Array. "this" is used to identify the current/selected object within the array.



function Article (rawDataObj) {
  // TODO: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // PUT YOUR RESPONSE HERE
// .clone() automates creating multiple HTML elements with the same classes. So, in this case, it can automatcally create additional set of HTML elements to attach additional articles when necessary.


  let $newArticle = $('article.template').clone();
  /* TODO: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');

  $newArticle.removeClass().addClass('displayarticles')
  $newArticle.attr('data-category', this.category);
  $newArticle.removeClass('.template');
  $newArticle.find('div.byline a').html(this.author);
  $newArticle.find('div.byline a').attr('href', this.authorUrl);
  $newArticle.find('#title').text(this.title);
  $newArticle.find('section.article-body').html(this.body);
  $newArticle.find('time').attr('datetime', this.publishedOn);

  $newArticle.appendTo('#articles');






  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODO: Refactor these for loops using the .forEach() array method.

// for(let i = 0; i < rawData.length; i++) {
//   articles.push(new Article(rawData[i]));
// }

// for(let i = 0; i < articles.length; i++) {
//   $('#articles').append(articles[i].toHtml());
// }

// $('.template').clone().appendTo('#articles');

// $('div.byline a').addClass('author');
articles.push(new Article(rawData[0]));
articles.push(new Article(rawData[1]));
articles.push(new Article(rawData[2]));
// new Article(rawData[0]);
articles[0].toHtml();
articles[1].toHtml();
articles[2].toHtml();