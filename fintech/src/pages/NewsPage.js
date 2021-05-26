import React, { useState } from "react";
import Header from "../component/common/Header";
import NewsList from "../component/news/NewsList";
import Search from "../component/news/Search";

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeInput = (e) => {
    //   searchText 변경
  };
  const handleClickSearchButton = () => {
    //   axios 요청 보내기
  };

  return (
    <div>
      <Header title="뉴스검색"></Header>
      {/* Header 컴포넌트 작성 */}
      <Search
        handleChangeSearchInput={handleChangeInput}
        handleClickSearchButton={handleClickSearchButton}
      ></Search>
      {/* Search 컴포넌트 작성 */}
      <NewsList news={news}></NewsList>
      {/* NewsList 컴포넌트 작성 */}
    </div>
  );
};

export default NewsPage;
