const doc = [
  {
    id: 1,
    title: 'document1 title',
    content: 'document1 content',
    date: '2017-01-01'
  },
  {
    id: 2,
    title: 'document2 title',
    content: 'document2 content',
    date: '2017-01-02'
  },
  {
    id: 3,
    title: 'document3 title',
    content: 'document3 content',
    date: '2017-01-03'
  },
  {
    id: 4,
    title: 'document4 title',
    content: 'document4 content',
    date: '2017-01-04'
  },
  {
    id: 5,
    title: 'document5 title',
    content: 'document5 content',
    date: '2017-01-05'
  },
  {
    id: 6,
    title: 'document6 title',
    content: 'document6 content',
    date: '2017-01-06'
  }
];

const blog = [
  {
    id: 1,
    title: 'blog1 title',
    content: 'blog1 content',
    date: '2017-01-01'
  },
  {
    id: 2,
    title: 'blog2 title',
    content: 'blog2 content',
    date: '2017-01-02'
  },
  {
    id: 3,
    title: 'blog3 title',
    content: 'blog3 content',
    date: '2017-01-03'
  },
  {
    id: 4,
    title: 'blog4 title',
    content: 'blog4 content',
    date: '2017-01-04'
  },
  {
    id: 5,
    title: 'blog5 title',
    content: 'blog5 content',
    date: '2017-01-05'
  },
  {
    id: 6,
    title: 'blog6 title',
    content: 'blog6 content',
    date: '2017-01-06'
  }
];

const book = [
  {
    id: 1,
    title: 'book1 title',
    content: 'book1 content',
    date: '2017-01-01'
  },
  {
    id: 2,
    title: 'book2 title',
    content: 'book2 content',
    date: '2017-01-02'
  },
  {
    id: 3,
    title: 'book3 title',
    content: 'book3 content',
    date: '2017-01-03'
  },
  {
    id: 4,
    title: 'book4 title',
    content: 'book4 content',
    date: '2017-01-04'
  },
  {
    id: 5,
    title: 'book5 title',
    content: 'book5 content',
    date: '2017-01-05'
  },
  {
    id: 6,
    title: 'book6 title',
    content: 'book6 content',
    date: '2017-01-06'
  }
];

const video = [
  {
    id: 1,
    title: 'video1 title',
    content: 'video1 content',
    date: '2017-01-01'
  },
  {
    id: 2,
    title: 'video2 title',
    content: 'video2 content',
    date: '2017-01-02'
  },
  {
    id: 3,
    title: 'video3 title',
    content: 'video3 content',
    date: '2017-01-03'
  },
  {
    id: 4,
    title: 'video4 title',
    content: 'video4 content',
    date: '2017-01-04'
  },
  {
    id: 5,
    title: 'video5 title',
    content: 'video5 content',
    date: '2017-01-05'
  },
  {
    id: 6,
    title: 'video6 title',
    content: 'video6 content',
    date: '2017-01-06'
  }
];

const project = [
  {
    id: 1,
    title: 'project1 title',
    content: 'project1 content',
    date: '2017-01-01'
  },
  {
    id: 2,
    title: 'project2 title',
    content: 'project2 content',
    date: '2017-01-02'
  },
  {
    id: 3,
    title: 'project3 title',
    content: 'project3 content',
    date: '2017-01-03'
  },
  {
    id: 4,
    title: 'project4 title',
    content: 'project4 content',
    date: '2017-01-04'
  },
  {
    id: 5,
    title: 'project5 title',
    content: 'project5 content',
    date: '2017-01-05'
  },
  {
    id: 6,
    title: 'project6 title',
    content: 'project6 content',
    date: '2017-01-06'
  }
];

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