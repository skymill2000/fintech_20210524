from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.implicitly_wait(3)
driver.get(
    'https://www.melon.com/chart/index.htm')
tableBody = driver.find_element_by_css_selector('#frm > div > table > tbody')
rows = tableBody.find_elements_by_tag_name('tr')
for index, value in enumerate(rows):
    if index != 0:
        rowNo = value.find_elements_by_tag_name('td')[1]
        address = value.find_elements_by_tag_name('td')[2]
        homeType = value.find_elements_by_tag_name('td')[3]
        print(rowNo.text + address.text + homeType.text)
