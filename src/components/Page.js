import { Pagination } from 'antd';

const Page = ({current, setCurrent,  pageSize, total}) => {

  const onChange = (page) => {
    console.log(page , "page===============>");
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange}    total={total} pageSize={pageSize} />;
};

export default Page;