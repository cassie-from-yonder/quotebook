from bs4 import BeautifulSoup
import urllib.request

class Source:
    def getSoup(url):
        fp = urllib.request.urlopen(url)
        page = fp.read().decode('utf8')
        fp.close()
        return BeautifulSoup(page,'html.parser')

class ScrapedArticle():
    def __init__(self,article,isLocal):
        self.article=article
        self.isLocal=isLocal

class Straits(Source):
    tagUrl = 'https://www.straitstimes.com/tags/coronavirus'
    articleUrl = 'https://www.straitstimes.com'

    def scrape_page_links(soup):
        return map(lambda x: Straits.articleUrl+x.find('a',href=True)['href'],soup.find_all(class_='story-headline'))

    def getAllLinks(start_page=0,end_page=9): # inclusive
        links = []
        for i in range(start_page,end_page+1):
            url = Straits.tagUrl if i!=0  else Straits.tagUrl + f'?page={i}'
            links.extend(Straits.scrape_page_links(Source.getSoup(url)))
        return links

    def checkIfLocal(link,soup=None):
        if soup is None:
            soup = Source.getSoup(link)
        return soup.find('div',itemprop='articleBody').find('p').getText().strip().startswith('SINGAPORE')

    def getArticles(start_page=0,end_page=9):
        return map(lambda x: ScrapedArticle(Article(x),checkIfLocal(x)),getAllLinks(start_page,end_page))
