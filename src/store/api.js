import { doc, blog, book, video, project } from './data';

export function fetchNewsList(params) {
  if (params.type && params.pageSize && params.pageNo) {  
    const type = parseInt(params.type);
    const pageSize = parseInt(params.pageSize);
    let pageNo = parseInt(params.pageNo);
    let news = [];

    switch(params.type) {
      case 'doc':
        news = doc;
        break;
      case 'blog':
        news = blog;
        break;
      case 'book':
        news = book;
        break;
      case 'video':
        news = video;
        break;
      case 'project':
        news = project;
        break;
    }
    
    const totalPage = Math.ceil(news.length / pageSize);
    if (pageNo > totalPage) {
      pageNo = totalPage;
    }
    const begin = pageSize * (pageNo - 1);
    const end = pageSize * pageNo;
    news = news.slice(begin, end);

    return {
      status: 'success',
      result: {
        totalPage: totalPage,
        data: news
      }
    }
  } else {
    return {
      status: 'error',
      result: 'lack of params'
    }
  }
}

export function fetchActiveItem(params) {
  if (params.type && params.id) {  
    const type = parseInt(params.type);
    const id = parseInt(params.id);
    let news = [];
    let activeNews = {};

    switch(params.type) {
      case 'doc':
        news = doc;
        break;
      case 'blog':
        news = blog;
        break;
      case 'book':
        news = book;
        break;
      case 'video':
        news = video;
        break;
      case 'project':
        news = project;
        break;
    }

    for (var i = news.length - 1; i >= 0; i--) {
      if (news[i].id === id) {
        activeNews = news[i];
        break;
      }
    }

    return {
      status: 'success',
      result: activeNews
    }
  } else {
    return {
      status: 'error',
      result: 'lack of params'
    }
  }
}