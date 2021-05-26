import React, { useState } from "react";
import Header from "../component/common/Header";
import Search from "../component/news/Search";

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeInput = () => {};

  return (
    <div>
      <Header title="뉴스검색"></Header>
      {/* Header 컴포넌트 작성 */}
      <Search></Search>
      {/* Search 컴포넌트 작성 */}

      {/* NewsList 컴포넌트 작성 */}
    </div>
  );
};

export default NewsPage;
