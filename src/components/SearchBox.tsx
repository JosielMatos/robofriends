interface searchChangeProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ searchChange }: searchChangeProps) => {
  return (
    <>
      <input
        className='pa3 ba b--green br3 bg-lightest-blue'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      ></input>
    </>
  );
};
