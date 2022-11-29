from selenium import webdriver
import unittest



class NewVisitorTest(unittest.TestCase):
    
    def setUp(self):
        self.browser = webdriver.Firefox()
    
    def tearDown(self):
        self.browser.quit()

    def test_can_user_open_start_window(self):
        # оочарованый произведегиями пользователь заходит на сайт 
        self.browser.get('http://localhost:8000')
        
        # Пользователь сразу подмечает заголовок страницы
        self.assertIn('Polly', self.browser.title)
        
        # Сразу же ему предлагается меню из возможных страниц к посещению
        # ['Art galery', 'Posts', 'Contact', 'About']
        #menu = self.browser.find_element()

        self.fail('End Test!')

    
if __name__ == '__main__':
    unittest.main(warnings='ignore')
