
import newspaper
from bs4 import BeautifulSoup
import urllib.request
#url = 'https://www.straitstimes.com/world/scammers-prey-on-desperate-in-covid-plagued-mexico'
url = 'https://www.straitstimes.com/tags/coronavirus'

#page = requests.get(url)

class Source:
    def getSoup(url):
        fp = urllib.request.urlopen(url)
        page = fp.read().decode('utf8')
        fp.close()
        return BeautifulSoup(page,'html.parser')

class Straits(Source):
    tag_base_url = 'https://www.straitstimes.com/tags/coronavirus'
    article_base_url = 'https://www.straitstimes.com'

    def scrape_page_links(soup):
        return map(lambda x: Straits.article_base_url+x.find('a',href=True)['href'],soup.find_all(class_='story-headline'))

    def getAllLinks(start_page=0,end_page=9): # inclusive
        links = []
        for i in range(start_page,end_page+1):
            url = Straits.tag_base_url if i!=0  else Straits.tag_base_url + f'?page={i}'
            links.extend(Straits.scrape_page_links(Source.getSoup(url)))
        return links

    def getArticles(start_page=0,end_page=9):
        return map(lambda x: Article(x))


#article = newspaper.Article(url)
#paper = newspaper.build('https://www.straitstimes.com/tags/coronavirus', memoize_articles=False)


if __name__ == '__main__':
    globals()[sys.argv[1]](*sys.argv[2:])
