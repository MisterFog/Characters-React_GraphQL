import { useQuery } from '@apollo/client';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GET_CHARACTERS } from '../../queries';
import List from '../../components/List';
import FilterBlock, { FilterCharacter } from '../../components/FilterBlock';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState<FilterCharacter>({
    name: '',
    status: '',
    species: '',
    gender: '',
  });
  const [formData, setFormData] = useState<FilterCharacter>(filter);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage + 1, filter },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data.characters.results;
  const pageCount = Math.ceil(data.characters.info.count / 20);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };

  const handleFilterSubmit = (formData: FilterCharacter) => {
    setFilter(formData);
    setFormData(formData);
  };

  return (
    <div className="content">
      <h1>List of characters</h1>

      <FilterBlock onSubmit={handleFilterSubmit} initialValues={formData} />

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
      />

      <List characters={characters} />
    </div>
  );
};

export default HomePage;
