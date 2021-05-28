from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.implicitly_wait(3)
driver.get('https://biz.chosun.com/international/international_economy/2021/05/28/N4JI4X7IBZHQRH5B5LEX4QCBLA')
title = driver.find_element_by_xpath(
    '//*[@id="fusion-app"]/div[1]/div[2]/div/div/div/section/div/div[2]/h1/span')
print(title.text)
