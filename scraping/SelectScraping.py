# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.support.ui import Select
driver = webdriver.Chrome('./chromedriver')
driver.implicitly_wait(1)
driver.get('http://www.eum.go.kr/web/am/amMain.jsp')
driver.implicitly_wait(1)
# 서울특별시 서대문구 북가좌동 456번지

addressInput = driver.find_element_by_css_selector('#recent > input')
addressInput.send_keys('서울특별시 서대문구 북가좌동 456')
driver.implicitly_wait(3)
searchButton = driver.find_element_by_css_selector(
    '#recent > div.recent_list.addrDiv > div > ul > li > a')
searchButton.click()
